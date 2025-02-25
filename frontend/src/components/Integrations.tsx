import React, { useEffect, useState } from 'react';

interface Integration {
  id: number;
  name: string;
  description: string;
  status: 'connected' | 'disconnected';
}

interface IntegrationsProps {
  integrations: Integration[];
  onConnect: (integrationId: number) => void;
  onDisconnect: (integrationId: number) => void;
}

const Integrations: React.FC<IntegrationsProps> = ({ integrations, onConnect, onDisconnect }) => {
  const [fetchedIntegrations, setFetchedIntegrations] = useState<Integration[]>(integrations);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIntegrationsData = async () => {
      try {
        const response = await fetch('/api/integrations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setFetchedIntegrations(data);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching integrations data:', error);
        setError('Failed to fetch integrations data. Please try again later.');
      }
    };

    fetchIntegrationsData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Third-Party Integrations</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 gap-4">
        {fetchedIntegrations.map((integration) => (
          <div key={integration.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">{integration.name}</h3>
            <p>{integration.description}</p>
            <div className="mt-2">
              {integration.status === 'connected' ? (
                <button
                  onClick={() => onDisconnect(integration.id)}
                  className="p-2 bg-red-500 text-white rounded-lg"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={() => onConnect(integration.id)}
                  className="p-2 bg-blue-500 text-white rounded-lg"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
