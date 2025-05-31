import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => (
  <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className="p-4">
      <h2 className="text-xl font-semibold">Menu</h2>
      <ul className="mt-4">
        <li className="py-2"><a href="#" className="hover:text-blue-300">Home</a></li>
        <li className="py-2"><a href="#" className="hover:text-blue-300">Customers</a></li>
        <li className="py-2"><a href="#" className="hover:text-blue-300">Orders</a></li>
        <li className="py-2"><a href="#" className="hover:text-blue-300">Reports</a></li>
      </ul>
    </div>
    <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default Sidebar;