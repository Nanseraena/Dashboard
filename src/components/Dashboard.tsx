import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import GridLayout from './GridLayout';
import GridItem from './GridItem';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import RecentUsers from './RecentUsers';
import Review from './Review';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement);

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [dailySales, setDailySales] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);

  const fetchData = useCallback(() => {
    setCustomers(500);
    setOrders(1200);
    setDailySales(15000);
    setCancelledOrders(45);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      } else if (!isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header className="z-30" />
      
      {/* Toggle Button - Visible only on mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 md:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar Backdrop - Only shown when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-blue-950 bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64 z-0`}>
          {/* First Row: Stats */}
          <GridLayout className="mb-6">
            <GridItem>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Total Customers</h3>
              <p className="text-3xl font-bold text-gray-900">{customers}</p>
            </GridItem>
            <GridItem>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-gray-900">{orders}</p>
            </GridItem>
            <GridItem>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Daily Sales</h3>
              <p className="text-3xl font-bold text-gray-900">${dailySales.toLocaleString()}</p>
            </GridItem>
            <GridItem>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Cancelled Orders</h3>
              <p className="text-3xl font-bold text-gray-900">{cancelledOrders}</p>
            </GridItem>
          </GridLayout>

          {/* Second Row: Charts */}
          <GridLayout className="mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <GridItem className="min-h-[300px] lg:col-span-2">
              <BarChart />
            </GridItem>
            <GridItem className="min-h-[300px] lg:col-span-2">
              <LineChart />
            </GridItem>
            <GridItem className="min-h-[300px] lg:col-span-1">
              <PieChart />
            </GridItem>
          </GridLayout>

          {/* Third Row: Review and RecentUsers */}
          <GridLayout className="grid-cols-1 sm:grid-cols-2">
            <GridItem className="min-h-[300px]">
              <Review />
            </GridItem>
            <GridItem className="min-h-[300px]">
              <RecentUsers />
            </GridItem>
          </GridLayout>
        </main>
      </div>
      
      <Footer className="z-30" />
    </div>
  );
};

export default Dashboard;