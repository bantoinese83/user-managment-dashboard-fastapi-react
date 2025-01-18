import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

interface UserProfileProps {
  onRoleChange: (userId: number, newRole: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onRoleChange }) => {
  const { users } = useUserContext();
  const [selectedUser, setSelectedUser] = useState(users[0] || null);

  useEffect(() => {
    if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [users]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedUser) {
      onRoleChange(selectedUser.id, event.target.value);
    }
  };

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <p>Name: {selectedUser.name}</p>
        <p>Email: {selectedUser.email}</p>
        <p>Phone: {selectedUser.contactDetails.phone}</p>
        <p>Address: {selectedUser.contactDetails.address}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Role Management</h3>
        <select value={selectedUser.role} onChange={handleRoleChange} className="p-2 border border-gray-300 rounded-lg">
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="member">Member</option>
        </select>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Activity Logs</h3>
        <ul>
          {selectedUser.activityLogs.map((log, index) => (
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
