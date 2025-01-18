import React from 'react';

interface CommunicationToolsProps {
  messages: { date: string; content: string }[];
  notifications: { date: string; content: string }[];
  feedback: { date: string; content: string }[];
}

const CommunicationTools: React.FC<CommunicationToolsProps> = ({ messages, notifications, feedback }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Communication Tools</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Messages/Emails</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              {message.date}: {message.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.date}: {notification.content}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">User Feedback</h3>
        <ul>
          {feedback.map((item, index) => (
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
