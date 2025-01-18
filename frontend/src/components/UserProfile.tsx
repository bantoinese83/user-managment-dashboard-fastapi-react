import React from 'react';

interface UserProfileProps {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    contactDetails: {
      phone: string;
      address: string;
    };
    activityLogs: {
      date: string;
      activity: string;
    }[];
  };
  onRoleChange: (userId: number, newRole: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onRoleChange }) => {
  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(user.id, event.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.contactDetails.phone}</p>
        <p>Address: {user.contactDetails.address}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Role Management</h3>
        <select value={user.role} onChange={handleRoleChange} className="p-2 border border-gray-300 rounded-lg">
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="member">Member</option>
        </select>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Activity Logs</h3>
        <ul>
          {user.activityLogs.map((log, index) => (
            <li key={index}>
              {log.date}: {log.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
