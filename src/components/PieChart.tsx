import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart: React.FC = () => {
  const data = {
    labels: ['New Customers', 'Returning Customers'],
    datasets: [{
      data: [300, 200],
      backgroundColor: ['#3B82F6', '#10B981'],
      hoverOffset: 20,
    }],
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Distribution</h3>
      <div className="h-64">
        <Pie data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default PieChart;