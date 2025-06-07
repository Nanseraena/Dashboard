import React from "react";
import { NavLink } from "react-router-dom";
import {
  ChartBarIcon,
  UsersIcon,
  ShoppingCartIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const navItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/" },
    { name: "Analytics", icon: ChartBarIcon, path: "/analytics" },
    { name: "Customers", icon: UsersIcon, path: "/customers" },
    { name: "Orders", icon: ShoppingCartIcon, path: "/orders" },
    { name: "Settings", icon: CogIcon, path: "/settings" },
  ];

  return (
    <div
      className={`fixed md:relative inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 transform ${
        isOpen
          ? "translate-x-0 md:translate-x-0"
          : "-translate-x-full md:translate-x-0"
      } z-30`}
    >
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`
                }
                onClick={toggleSidebar}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
