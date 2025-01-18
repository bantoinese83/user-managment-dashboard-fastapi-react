import React, { useEffect, useState } from 'react';

interface UserComplianceProps {
  gdprCompliance: boolean;
  termsAccepted: boolean;
  dataRetentionPolicy: string;
  onGDPRRequest: () => void;
  onTermsAcceptance: () => void;
  onDataRetentionChange: (policy: string) => void;
}

const UserCompliance: React.FC<UserComplianceProps> = ({
  gdprCompliance,
  termsAccepted,
  dataRetentionPolicy,
  onGDPRRequest,
  onTermsAcceptance,
  onDataRetentionChange,
}) => {
  const [fetchedGDPRCompliance, setFetchedGDPRCompliance] = useState(gdprCompliance);
  const [fetchedTermsAccepted, setFetchedTermsAccepted] = useState(termsAccepted);
  const [fetchedDataRetentionPolicy, setFetchedDataRetentionPolicy] = useState(dataRetentionPolicy);

  useEffect(() => {
    const fetchUserComplianceData = async () => {
      try {
        const response = await fetch('/api/user-compliance');
        const data = await response.json();
        setFetchedGDPRCompliance(data.gdprCompliance);
        setFetchedTermsAccepted(data.termsAccepted);
        setFetchedDataRetentionPolicy(data.dataRetentionPolicy);
      } catch (error) {
        console.error('Error fetching user compliance data:', error);
      }
    };

    fetchUserComplianceData();
  }, []);

  const handleDataRetentionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onDataRetentionChange(event.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Compliance & Legal Management</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">GDPR/Privacy Compliance</h3>
        <p>{fetchedGDPRCompliance ? 'Compliant' : 'Not Compliant'}</p>
        <button
          onClick={onGDPRRequest}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Request GDPR Data
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Terms of Service Acceptance</h3>
        <p>{fetchedTermsAccepted ? 'Accepted' : 'Not Accepted'}</p>
        <button
          onClick={onTermsAcceptance}
          className="p-2 bg-green-500 text-white rounded-lg"
        >
          Accept Terms
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Data Retention Policy</h3>
        <textarea
          value={fetchedDataRetentionPolicy}
          onChange={handleDataRetentionChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default UserCompliance;
