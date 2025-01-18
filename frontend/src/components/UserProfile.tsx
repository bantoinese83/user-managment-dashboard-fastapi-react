import React, { useEffect, useState } from 'react';

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
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/user-profile/${user.id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };

    fetchUserProfile();
  }, [user.id]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(userData.id, event.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.contactDetails.phone}</p>
        <p>Address: {userData.contactDetails.address}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Role Management</h3>
        <select value={userData.role} onChange={handleRoleChange} className="p-2 border border-gray-300 rounded-lg">
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="member">Member</option>
        </select>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Activity Logs</h3>
        <ul>
          {userData.activityLogs.map((log, index) => (
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
