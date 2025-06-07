import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart: React.FC = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Current Month Orders',
        data: [120, 135, 125, 140],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
      },
      {
        label: 'Previous Month Orders',
        data: [110, 120, 115, 130],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
      },
    ],
  };
  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Performance Comparison</h3>
      <div className="h-[250px]">
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default LineChart;