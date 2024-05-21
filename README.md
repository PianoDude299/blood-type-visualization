# blood-type-visualization
Repository for a react based application to make a request to an api to get data on blood types and visualize it on a website

# Blood Types Data Project

## Overview
This project is a web application that visualizes blood types data using bar and pie charts. Users can filter the data based on blood type and group, making it easy to analyze and understand the distribution of different blood types.

## Features
- **Dynamic Data Fetching**: Fetches blood type data from an API.
- **Interactive Charts**: Displays data using responsive bar and pie charts.
- **Filtering Options**: Users can filter data based on blood type and group.
- **Smooth Animations**: Includes background gradient animations and hover effects on charts.
- **Responsive Design**: Ensures a good user experience on both desktop and mobile devices.

## File Structure
BloodTypesDataProject/
├── src/
│ ├── index.html
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── api.js
│ ├── header.png
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ ├── components/
│ │ ├── BloodTypeChart.js
│ │ ├── Filter.js
├── README.md
├── Documentation.pdf


## How to Run
1. **Clone the repository**:
    ```sh
    git clone https://github.com/PianoDude299/blood-type-visualization.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd blood-type-visualization/src
    ```
3. **Open `index.html` in a web browser**:
    Simply double-click the `index.html` file, or right-click and select "Open with" and choose your preferred web browser.

## Dependencies
- **Chart.js**: A JavaScript library used for rendering bar and pie charts.
- **Google Fonts**: For custom fonts used in the project.

## Installation
No special installation is required. Just ensure that all files are in the same directory and open `index.html` in a web browser.

## Code Explanation
- **index.html**: The main HTML file containing the structure of the webpage.
- **App.css**: The CSS file for styling the webpage, including animations and responsive design.
- **App.js**: The JavaScript file that handles data fetching, processing, and chart rendering.

### HTML
The HTML file contains the layout of the web application, including the navbar, filters, and chart containers.

### CSS
The CSS file includes styles for the layout, fonts, colors, and animations. Key styles include:
- Background gradient animation
- Chart hover animations
- Responsive design adjustments

### JavaScript
The JavaScript file fetches data from the API, processes it, and renders the charts using Chart.js. Key functions include:
- `fetchData()`: Fetches data from the API.
- `updateCharts(data)`: Updates the charts with the fetched data.
- `applyFilters()`: Applies filters based on user selection.

## Usage Instructions
1. **Open the web application**:
    Open `index.html` in your preferred web browser.
2. **Filter Data**:
    Use the dropdown menus to filter the data by blood type and group.
3. **Hover Effects**:
    Hover over the charts to see interactive animations.
4. **Background Animation**:
    Enjoy the smooth background gradient animation.

## Author
- K S Suryanarayan

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Conclusion
This project showcases the use of HTML, CSS, and JavaScript to create a dynamic and interactive data visualization tool. Future enhancements could include additional filtering options, more chart types, and real-time data updates.

