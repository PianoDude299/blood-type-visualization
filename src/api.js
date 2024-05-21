import axios from 'axios';

const fetchBloodTypes = async (retryCount = 0) => {
  const maxRetries = 5;
  const retryDelay = 1000 * Math.pow(2, retryCount); // Exponential backoff

  try {
    const response = await axios.get('https://random-data-api.com/api/v2/blood_types?size=100&response_type=json');
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429 && retryCount < maxRetries) {
      console.warn(`Rate limited. Retrying in ${retryDelay / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      return fetchBloodTypes(retryCount + 1);
    } else {
      console.error('Error fetching blood types:', error);
      return [];
    }
  }
};

export default fetchBloodTypes;
