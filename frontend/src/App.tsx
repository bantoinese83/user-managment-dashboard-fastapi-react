import React from 'react';
import UserOverview from './components/UserOverview';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import UserAccessControl from './components/UserAccessControl';
import UserAuthentication from './components/UserAuthentication';
import UserActivity from './components/UserActivity';
import CommunicationTools from './components/CommunicationTools';
import UserSubscription from './components/UserSubscription';
import DataExport from './components/DataExport';
import UserCompliance from './components/UserCompliance';
import UserEngagement from './components/UserEngagement';
import SupportIntegration from './components/SupportIntegration';
import UserImportExport from './components/UserImportExport';
import UserCustomization from './components/UserCustomization';
import Integrations from './components/Integrations';
import SystemHealth from './components/SystemHealth';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">User Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UserOverview totalUsers={1000} activeUsers={800} newRegistrations={50} inactiveUsers={200} />
        <UserList users={[]} />
        <UserProfile user={{
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'admin',
          contactDetails: {
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA'
          },
          activityLogs: [
            { date: '2023-01-01', activity: 'Logged in' },
            { date: '2023-01-02', activity: 'Updated profile' }
          ]
        }} onRoleChange={(userId, newRole) => {}} />
        <UserAccessControl roles={[]} onRoleChange={(roleId, newPermissions) => {}} />
        <UserAuthentication
          onMFASetup={(userId) => {}}
          onPasswordReset={(userId) => {}}
          onAccountLock={(userId) => {}}
          onAccountUnlock={(userId) => {}}
        />
        <UserActivity />
        <CommunicationTools />
        <UserSubscription />
        <DataExport />
        <UserCompliance />
        <UserEngagement />
        <SupportIntegration />
        <UserImportExport />
        <UserCustomization />
        <Integrations />
        <SystemHealth />
      </div>
    </div>
  );
};

export default App;
