import React from 'react';

interface UserEngagementProps {
  gamificationInsights: { achievement: string; points: number }[];
  activityMilestones: { milestone: string; date: string }[];
  engagementAnalytics: { metric: string; value: number }[];
}

const UserEngagement: React.FC<UserEngagementProps> = ({ gamificationInsights, activityMilestones, engagementAnalytics }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Engagement & Retention</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Gamification Insights</h3>
        <ul>
          {gamificationInsights.map((insight, index) => (
            <li key={index}>
              {insight.achievement}: {insight.points} points
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Activity Milestones</h3>
        <ul>
          {activityMilestones.map((milestone, index) => (
            <li key={index}>
              {milestone.milestone}: {milestone.date}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Engagement Analytics</h3>
        <ul>
          {engagementAnalytics.map((analytic, index) => (
            <li key={index}>
              {analytic.metric}: {analytic.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserEngagement;
