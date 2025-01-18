import React, { useState, useEffect } from 'react';

interface UserImportExportProps {
  onImport: (file: File) => void;
  onExport: (format: string) => void;
  apiAccess: string;
}

const UserImportExport: React.FC<UserImportExportProps> = ({ onImport, onExport, apiAccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fetchedApiAccess, setFetchedApiAccess] = useState(apiAccess);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserImportExportData = async () => {
      try {
        const response = await fetch('/api/user-import-export');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setFetchedApiAccess(data.apiAccess);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching user import/export data:', error);
        setError('Failed to fetch user import/export data. Please try again later.');
      }
    };

    fetchUserImportExportData();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      onImport(selectedFile);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Import/Export</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Bulk Import</h3>
        <input type="file" onChange={handleFileChange} className="p-2 border border-gray-300 rounded-lg" />
        <button onClick={handleImport} className="p-2 bg-blue-500 text-white rounded-lg ml-2">
          Import
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Bulk Export</h3>
        <button onClick={() => onExport('csv')} className="p-2 bg-blue-500 text-white rounded-lg mr-2">
          Export to CSV
        </button>
        <button onClick={() => onExport('excel')} className="p-2 bg-green-500 text-white rounded-lg mr-2">
          Export to Excel
        </button>
        <button onClick={() => onExport('pdf')} className="p-2 bg-red-500 text-white rounded-lg">
          Export to PDF
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold">API Access</h3>
        <p>{fetchedApiAccess}</p>
      </div>
    </div>
  );
};

export default UserImportExport;
