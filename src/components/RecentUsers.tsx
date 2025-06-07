import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface User {
  name: string;
  text: string;
  timestamp: string;
  approved: boolean;
}

const RecentUsers: React.FC = () => {
  const users: User[] = [
    { name: 'Isabella Christensen', text: 'Lorem ipsum is simply dummy text of...', timestamp: '11 MAY 12:56', approved: true },
    { name: 'Mathilde Andersen', text: 'Lorem ipsum is simply dummy text of...', timestamp: '11 MAY 10:35', approved: false },
    { name: 'Karla Sørensen', text: 'Lorem ipsum is simply dummy text of...', timestamp: '9 MAY 17:38', approved: true },
    { name: 'Ida Jørgensen', text: 'Lorem ipsum is simply dummy text of...', timestamp: '19 MAY 12:56', approved: false },
    { name: 'Albert Andersen', text: 'Lorem ipsum is simply dummy text of...', timestamp: '21 JUL 12:56', approved: true },
  ];

  const handleReject = (name: string) => {
    alert(`Rejected ${name}`);
  };

  const handleApprove = (name: string) => {
    alert(`Approved ${name}`);
  };

  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
      <div className="overflow-y-auto h-[250px]">
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3 min-w-0">
                <UserCircleIcon className="h-10 w-10 text-gray-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium truncate">{user.name}</p>
                  <p className="text-sm text-gray-600 truncate">{user.text}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 ml-12 sm:ml-0">
                <span className={`h-2 w-2 rounded-full flex-shrink-0 ${user.approved ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm text-gray-500 whitespace-nowrap">{user.timestamp}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleReject(user.name)}
                    className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm bg-purple-500 text-white rounded hover:bg-purple-600 whitespace-nowrap"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleApprove(user.name)}
                    className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm bg-green-500 text-white rounded hover:bg-green-600 whitespace-nowrap"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentUsers;