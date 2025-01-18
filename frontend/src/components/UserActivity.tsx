import React from 'react';

interface UserActivityProps {
  loginLogoutLogs: { date: string; action: string }[];
  activityFeed: { date: string; activity: string }[];
  auditTrail: { date: string; action: string }[];
}

const UserActivity: React.FC<UserActivityProps> = ({ loginLogoutLogs, activityFeed, auditTrail }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Activity</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Login/Logout Logs</h3>
        <ul>
          {loginLogoutLogs.map((log, index) => (
            <li key={index}>
              {log.date}: {log.action}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Activity Feed</h3>
        <ul>
          {activityFeed.map((activity, index) => (
            <li key={index}>
              {activity.date}: {activity.activity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Audit Trail</h3>
        <ul>
          {auditTrail.map((audit, index) => (
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
