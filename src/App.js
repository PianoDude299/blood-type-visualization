import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

const fetchBloodTypes = async () => {
  const localData = localStorage.getItem('bloodTypes');
  if (localData) {
    return JSON.parse(localData);
  }

  try {
    const response = await axios.get('https://random-data-api.com/api/v2/blood_types?size=10&response_type=json');
    const data = response.data;
    localStorage.setItem('bloodTypes', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error fetching blood types: ', error);
    return [];
  }
};

function App() {
  const [bloodTypes, setBloodTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBloodTypes();
      setBloodTypes(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const filtered = bloodTypes.filter(item => 
      (name === 'type' && (item.type === value || value === 'all')) ||
      (name === 'group' && (item.group === value || value === 'all'))
    );
    setFilteredData(filtered);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('bloodTypes');
    window.location.reload();
  };

  const bloodTypeCounts = filteredData.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const bloodTypeData = {
    labels: Object.keys(bloodTypeCounts),
    datasets: [{
      label: 'Blood Types',
      data: Object.values(bloodTypeCounts),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

  return (
    <div className="App">
      <section class="masthead" role="img" aria-label="Image Description">
        <h1>
          Blood Type Data
        </h1>
        <button onClick={clearLocalStorage}>Fetch New Data</button>
      </section>

      <nav className="navbar">
        
        <div className="filters">
          <select name="type" onChange={handleFilterChange}>
            <option value="all">All Types</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
          <select name="group" onChange={handleFilterChange}>
            <option value="all">All Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        
      </nav>
      <div className="charts">
        <div className="chart-container bar-chart">
          <h2>Bar Chart</h2>
          <Bar data={bloodTypeData} />
        </div>
        <div className="chart-container pie-chart">
          <h2>Pie Chart</h2>
          <Pie data={bloodTypeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
