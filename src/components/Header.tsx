import React, { useState } from 'react';
import { MagnifyingGlassIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Placeholder for search functionality
    console.log('Search query:', e.target.value);
  };

  const handleNotificationsClick = () => {
    // Placeholder for notifications functionality
    alert('Notifications clicked!');
  };

  const handleProfileClick = () => {
    // Placeholder for profile functionality
    alert('Profile clicked!');
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Left Section: Title */}
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Right Section: Search, Notifications, Profile */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
        {/* Notifications Icon */}
        <button
          onClick={handleNotificationsClick}
          className="p-2 hover:bg-blue-700 rounded-full transition"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6" />
        </button>
        {/* Profile Icon */}
        <button
          onClick={handleProfileClick}
          className="p-2 hover:bg-blue-700 rounded-full transition"
          aria-label="User Profile"
        >
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;