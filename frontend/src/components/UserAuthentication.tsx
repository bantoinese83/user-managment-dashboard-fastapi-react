import React, { useState } from 'react';

interface UserAuthenticationProps {
  onMFASetup: (userId: number) => void;
  onPasswordReset: (userId: number) => void;
  onAccountLock: (userId: number) => void;
  onAccountUnlock: (userId: number) => void;
}

const UserAuthentication: React.FC<UserAuthenticationProps> = ({
  onMFASetup,
  onPasswordReset,
  onAccountLock,
  onAccountUnlock,
}) => {
  const [userId, setUserId] = useState<number | null>(null);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(parseInt(event.target.value, 10));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Authentication & Security</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">User ID</label>
        <input
          type="number"
          value={userId || ''}
          onChange={handleUserIdChange}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => userId && onMFASetup(userId)}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Setup MFA
        </button>
        <button
          onClick={() => userId && onPasswordReset(userId)}
          className="p-2 bg-yellow-500 text-white rounded-lg"
        >
          Reset Password
        </button>
        <button
          onClick={() => userId && onAccountLock(userId)}
          className="p-2 bg-red-500 text-white rounded-lg"
        >
          Lock Account
        </button>
        <button
          onClick={() => userId && onAccountUnlock(userId)}
          className="p-2 bg-green-500 text-white rounded-lg"
        >
          Unlock Account
        </button>
      </div>
    </div>
  );
};

export default UserAuthentication;
