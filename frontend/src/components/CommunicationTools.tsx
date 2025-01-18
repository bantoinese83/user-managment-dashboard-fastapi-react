import React, { useEffect, useState } from 'react';

interface CommunicationToolsProps {
  messages: { date: string; content: string }[];
  notifications: { date: string; content: string }[];
  feedback: { date: string; content: string }[];
}

const CommunicationTools: React.FC<CommunicationToolsProps> = ({ messages, notifications, feedback }) => {
  const [fetchedMessages, setFetchedMessages] = useState(messages);
  const [fetchedNotifications, setFetchedNotifications] = useState(notifications);
  const [fetchedFeedback, setFetchedFeedback] = useState(feedback);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommunicationToolsData = async () => {
      try {
        const response = await fetch('/api/communication-tools');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setFetchedMessages(data.messages);
          setFetchedNotifications(data.notifications);
          setFetchedFeedback(data.feedback);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching communication tools data:', error);
        setError('Failed to fetch communication tools data. Please try again later.');
      }
    };

    fetchCommunicationToolsData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Communication Tools</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Messages/Emails</h3>
        <ul>
          {fetchedMessages.map((message, index) => (
            <li key={index}>
              {message.date}: {message.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <ul>
          {fetchedNotifications.map((notification, index) => (
            <li key={index}>
              {notification.date}: {notification.content}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">User Feedback</h3>
        <ul>
          {fetchedFeedback.map((item, index) => (
            <li key={index}>
              {item.date}: {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunicationTools;
