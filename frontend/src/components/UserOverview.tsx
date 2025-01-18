import React from 'react';

interface UserOverviewProps {
  totalUsers: number;
  activeUsers: number;
  newRegistrations: number;
  inactiveUsers: number;
}

const UserOverview: React.FC<UserOverviewProps> = ({ totalUsers, activeUsers, newRegistrations, inactiveUsers }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{totalUsers}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-2xl">{activeUsers}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">New Registrations</h3>
          <p className="text-2xl">{newRegistrations}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Inactive Users</h3>
          <p className="text-2xl">{inactiveUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
