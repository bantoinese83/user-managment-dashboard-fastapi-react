import React from 'react';

interface SupportIntegrationProps {
  tickets: { id: number; subject: string; status: string; date: string }[];
  chats: { id: number; message: string; date: string }[];
  helpArticles: { id: number; title: string; content: string }[];
}

const SupportIntegration: React.FC<SupportIntegrationProps> = ({ tickets, chats, helpArticles }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Support & Helpdesk Integration</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Ticketing System</h3>
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              {ticket.date}: {ticket.subject} - {ticket.status}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Chat Integration</h3>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              {chat.date}: {chat.message}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Help Articles/FAQs</h3>
        <ul>
          {helpArticles.map((article) => (
            <li key={article.id}>
              <strong>{article.title}</strong>: {article.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportIntegration;
