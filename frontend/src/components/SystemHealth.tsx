import React, { useEffect, useState } from 'react';

interface SystemHealthProps {
  systemStatus: string;
  performanceMetrics: {
    cpuUsage: number;
    memoryUsage: number;
    responseTime: number;
  };
}

const SystemHealth: React.FC<SystemHealthProps> = ({ systemStatus, performanceMetrics }) => {
  const [fetchedSystemStatus, setFetchedSystemStatus] = useState(systemStatus);
  const [fetchedPerformanceMetrics, setFetchedPerformanceMetrics] = useState(performanceMetrics);

  useEffect(() => {
    const fetchSystemHealthData = async () => {
      try {
        const response = await fetch('/api/system-health');
        const data = await response.json();
        setFetchedSystemStatus(data.systemStatus);
        setFetchedPerformanceMetrics(data.performanceMetrics);
      } catch (error) {
        console.error('Error fetching system health data:', error);
      }
    };

    fetchSystemHealthData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">System Health</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">System Status</h3>
        <p className="text-xl">{fetchedSystemStatus}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-md font-semibold">CPU Usage</h4>
            <p className="text-lg">{fetchedPerformanceMetrics.cpuUsage}%</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-md font-semibold">Memory Usage</h4>
            <p className="text-lg">{fetchedPerformanceMetrics.memoryUsage} MB</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-md font-semibold">Response Time</h4>
            <p className="text-lg">{fetchedPerformanceMetrics.responseTime} ms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
