import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BloodTypeChart = ({ data }) => {
    const bloodTypeCounts = data.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});

    const groupCounts = data.reduce((acc, item) => {
        acc[item.group] = (acc[item.group] || 0) + 1;
        return acc;
    }, {});

    const bloodTypeData = {
        labels: Object.keys(bloodTypeCounts),
        datasets: [
            {
                label: 'Blood Types',
                data: Object.values(bloodTypeCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const groupData = {
        labels: Object.keys(groupCounts),
        datasets: [
            {
                label: 'Blood Groups',
                data: Object.values(groupCounts),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="chart-container">
                <Bar data={bloodTypeData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="chart-container">
                <Pie data={groupData} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    );
};

export default BloodTypeChart;
