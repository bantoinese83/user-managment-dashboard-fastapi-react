import React, { useEffect, useState } from 'react';
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
  const [userOverviewData, setUserOverviewData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newRegistrations: 0,
    inactiveUsers: 0,
  });
  const [userListData, setUserListData] = useState([]);
  const [userProfileData, setUserProfileData] = useState(null);
  const [rolesData, setRolesData] = useState([]);
  const [userActivityData, setUserActivityData] = useState({
    loginLogoutLogs: [],
    activityFeed: [],
    auditTrail: [],
  });
  const [communicationToolsData, setCommunicationToolsData] = useState({
    messages: [],
    notifications: [],
    feedback: [],
  });
  const [userSubscriptionData, setUserSubscriptionData] = useState({
    subscriptionPlan: '',
    billingHistory: [],
    paymentMethods: [],
  });
  const [dataExportData, setDataExportData] = useState({
    customReports: [],
    analytics: [],
  });
  const [userComplianceData, setUserComplianceData] = useState({
    gdprCompliance: false,
    termsAccepted: false,
    dataRetentionPolicy: '',
  });
  const [userCustomizationData, setUserCustomizationData] = useState(null);
  const [userEngagementData, setUserEngagementData] = useState({
    gamificationInsights: [],
    activityMilestones: [],
    engagementAnalytics: [],
  });
  const [userImportExportData, setUserImportExportData] = useState({
    apiAccess: '',
  });
  const [integrationsData, setIntegrationsData] = useState([]);
  const [systemHealthData, setSystemHealthData] = useState({
    systemStatus: '',
    performanceMetrics: {
      cpuUsage: 0,
      memoryUsage: 0,
      responseTime: 0,
    },
  });

  useEffect(() => {
    // Fetch data from backend API and set state
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user-overview');
        const data = await response.json();
        setUserOverviewData(data);
      } catch (error) {
        console.error('Error fetching user overview data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">User Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UserOverview {...userOverviewData} />
        <UserList users={userListData} />
        <UserProfile user={userProfileData} onRoleChange={(userId, newRole) => {}} />
        <UserAccessControl roles={rolesData} onRoleChange={(roleId, newPermissions) => {}} />
        <UserAuthentication
          onMFASetup={(userId) => {}}
          onPasswordReset={(userId) => {}}
          onAccountLock={(userId) => {}}
          onAccountUnlock={(userId) => {}}
        />
        <UserActivity {...userActivityData} />
        <CommunicationTools {...communicationToolsData} />
        <UserSubscription {...userSubscriptionData} />
        <DataExport {...dataExportData} />
        <UserCompliance {...userComplianceData} />
        <UserEngagement {...userEngagementData} />
        <SupportIntegration />
        <UserImportExport {...userImportExportData} />
        <UserCustomization user={userCustomizationData} onProfileUpdate={(userId, updatedProfile) => {}} onThemeChange={(userId, newTheme) => {}} />
        <Integrations integrations={integrationsData} onConnect={(integrationId) => {}} onDisconnect={(integrationId) => {}} />
        <SystemHealth {...systemHealthData} />
      </div>
    </div>
  );
};

export default App;
