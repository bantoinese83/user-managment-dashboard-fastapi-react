import React, { useEffect, useState } from 'react';

interface UserActivityProps {
  loginLogoutLogs: { date: string; action: string }[];
  activityFeed: { date: string; activity: string }[];
  auditTrail: { date: string; action: string }[];
}

const UserActivity: React.FC<UserActivityProps> = ({ loginLogoutLogs, activityFeed, auditTrail }) => {
  const [fetchedLoginLogoutLogs, setFetchedLoginLogoutLogs] = useState(loginLogoutLogs);
  const [fetchedActivityFeed, setFetchedActivityFeed] = useState(activityFeed);
  const [fetchedAuditTrail, setFetchedAuditTrail] = useState(auditTrail);

  useEffect(() => {
    const fetchUserActivityData = async () => {
      try {
        const response = await fetch('/api/user-activity');
        const data = await response.json();
        setFetchedLoginLogoutLogs(data.loginLogoutLogs);
        setFetchedActivityFeed(data.activityFeed);
        setFetchedAuditTrail(data.auditTrail);
      } catch (error) {
        console.error('Error fetching user activity data:', error);
      }
    };

    fetchUserActivityData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Activity</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Login/Logout Logs</h3>
        <ul>
          {fetchedLoginLogoutLogs.map((log, index) => (
            <li key={index}>
              {log.date}: {log.action}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Activity Feed</h3>
        <ul>
          {fetchedActivityFeed.map((activity, index) => (
            <li key={index}>
              {activity.date}: {activity.activity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Audit Trail</h3>
        <ul>
          {fetchedAuditTrail.map((audit, index) => (
            <li key={index}>
              {audit.date}: {audit.action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserActivity;
