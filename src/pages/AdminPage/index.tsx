import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-indigo-700 text-white">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-1">Manage your TirupatiOne application</p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">1,234</p>
              <p className="mt-1 text-sm text-gray-500">+12% from last month</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Active Services</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">89</p>
              <p className="mt-1 text-sm text-gray-500">+8% from last month</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Total Bookings</h3>
              <p className="mt-2 text-3xl font-bold text-purple-600">5,432</p>
              <p className="mt-1 text-sm text-gray-500">+24% from last month</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                Add New Service
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                Manage Ads
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                View Users
              </button>
              <button 
                onClick={logout}
                className="p-4 border rounded-lg hover:bg-red-50 text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        New booking #{1000 + item} received
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          New
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Customer {item}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          {item} hour{item !== 1 ? 's' : ''} ago
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
