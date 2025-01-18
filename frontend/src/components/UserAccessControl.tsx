import React, { useState, useEffect } from 'react';

interface Role {
  id: number;
  name: string;
  permissions: string[];
}

interface UserAccessControlProps {
  roles: Role[];
  onRoleChange: (roleId: number, newPermissions: string[]) => void;
}

const UserAccessControl: React.FC<UserAccessControlProps> = ({ roles, onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [newPermissions, setNewPermissions] = useState<string[]>([]);
  const [fetchedRoles, setFetchedRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch('/api/roles');
        const data = await response.json();
        setFetchedRoles(data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleRoleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const roleId = parseInt(event.target.value, 10);
    const role = fetchedRoles.find((r) => r.id === roleId) || null;
    setSelectedRole(role);
    setNewPermissions(role ? role.permissions : []);
  };

  const handlePermissionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const permission = event.target.value;
    setNewPermissions((prevPermissions) =>
      event.target.checked
        ? [...prevPermissions, permission]
        : prevPermissions.filter((p) => p !== permission)
    );
  };

  const handleSave = () => {
    if (selectedRole) {
      onRoleChange(selectedRole.id, newPermissions);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Access Control</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Role</label>
        <select
          value={selectedRole ? selectedRole.id : ''}
          onChange={handleRoleSelect}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="" disabled>
            Select a role
          </option>
          {fetchedRoles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      {selectedRole && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Permissions</h3>
          <div className="grid grid-cols-2 gap-4">
            {['read', 'write', 'admin'].map((permission) => (
              <label key={permission} className="flex items-center">
                <input
                  type="checkbox"
                  value={permission}
                  checked={newPermissions.includes(permission)}
                  onChange={handlePermissionChange}
                  className="mr-2"
                />
                {permission}
              </label>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={handleSave}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        Save
      </button>
    </div>
  );
};

export default UserAccessControl;
