import React, { useState, useEffect } from 'react';

interface UserCustomizationProps {
  user: {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    theme: string;
  } | null;
  onProfileUpdate: (userId: number, updatedProfile: { avatar: string; bio: string }) => void;
  onThemeChange: (userId: number, newTheme: string) => void;
}

const UserCustomization: React.FC<UserCustomizationProps> = ({ user, onProfileUpdate, onThemeChange }) => {
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [theme, setTheme] = useState(user?.theme || '');
  const [, setFetchedUser] = useState(user);

  useEffect(() => {
    if (user) {
      const fetchUserCustomizationData = async () => {
        try {
          const response = await fetch(`/api/user-customization/${user.id}`);
          const data = await response.json();
          setFetchedUser(data);
          setAvatar(data.avatar);
          setBio(data.bio);
          setTheme(data.theme);
        } catch (error) {
          console.error('Error fetching user customization data:', error);
        }
      };

      fetchUserCustomizationData();
    }
  }, [user]);

  const handleProfileUpdate = () => {
    if (user) {
      onProfileUpdate(user.id, { avatar, bio });
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    if (user) {
      onThemeChange(user.id, newTheme);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Customization</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Avatar</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        onClick={handleProfileUpdate}
        className="p-2 bg-blue-500 text-white rounded-lg mb-4"
      >
        Update Profile
      </button>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Theme</label>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default UserCustomization;