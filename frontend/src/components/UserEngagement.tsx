import React, { useEffect, useState } from 'react';

interface UserEngagementProps {
  gamificationInsights: { achievement: string; points: number }[];
  activityMilestones: { milestone: string; date: string }[];
  engagementAnalytics: { metric: string; value: number }[];
}

const UserEngagement: React.FC<UserEngagementProps> = ({ gamificationInsights, activityMilestones, engagementAnalytics }) => {
  const [fetchedGamificationInsights, setFetchedGamificationInsights] = useState(gamificationInsights);
  const [fetchedActivityMilestones, setFetchedActivityMilestones] = useState(activityMilestones);
  const [fetchedEngagementAnalytics, setFetchedEngagementAnalytics] = useState(engagementAnalytics);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEngagementData = async () => {
      try {
        const response = await fetch('/api/user-engagement');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setFetchedGamificationInsights(data.gamificationInsights);
          setFetchedActivityMilestones(data.activityMilestones);
          setFetchedEngagementAnalytics(data.engagementAnalytics);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching user engagement data:', error);
        setError('Failed to fetch user engagement data. Please try again later.');
      }
    };

    fetchUserEngagementData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Engagement & Retention</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Gamification Insights</h3>
        <ul>
          {fetchedGamificationInsights.map((insight, index) => (
            <li key={index}>
              {insight.achievement}: {insight.points} points
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Activity Milestones</h3>
        <ul>
          {fetchedActivityMilestones.map((milestone, index) => (
            <li key={index}>
              {milestone.milestone}: {milestone.date}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Engagement Analytics</h3>
        <ul>
          {fetchedEngagementAnalytics.map((analytic, index) => (
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
