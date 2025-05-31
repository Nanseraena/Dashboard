import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Card from './Card';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement);

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState(0);
  const [orders, setOrders] = useState(0);

  const fetchData = useCallback(() => {
    setCustomers(500);
    setOrders(1200);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);

  return (
    <>
      <Header />
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-20 text-blue-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Total Customers" value={customers} />
          <Card title="Total Orders" value={orders} />
          <PieChart />
          <BarChart />
          <LineChart />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;