import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Orders',
      data: [65, 59, 80, 81, 56],
      backgroundColor: '#3B82F6',
    }],
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Orders</h3>
      <div className="h-64">
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default BarChart;