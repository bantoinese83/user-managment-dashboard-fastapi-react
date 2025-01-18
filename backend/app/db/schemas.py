from pydantic import BaseModel
from typing import List, Optional


class UserOverview(BaseModel):
    totalUsers: int
    activeUsers: int
    newRegistrations: int
    inactiveUsers: int


class User(BaseModel):
    id: int
    name: str
    email: str
    role: str
    status: str


class UserProfile(BaseModel):
    id: int
    name: str
    email: str
    role: str
    contactDetails: dict
    activityLogs: List[dict]


class Role(BaseModel):
    id: int
    name: str
    permissions: List[str]


class UserActivity(BaseModel):
    loginLogoutLogs: List[dict]
    activityFeed: List[dict]
    auditTrail: List[dict]


class CommunicationTools(BaseModel):
    messages: List[dict]
    notifications: List[dict]
    feedback: List[dict]


class UserSubscription(BaseModel):
    subscriptionPlan: str
    billingHistory: List[dict]
    paymentMethods: List[dict]


class DataExport(BaseModel):
    customReports: List[dict]
    analytics: List[dict]


class UserCompliance(BaseModel):
    gdprCompliance: bool
    termsAccepted: bool
    dataRetentionPolicy: str


class UserCustomization(BaseModel):
    id: int
    name: str
    avatar: str
    bio: str
    theme: str


class UserEngagement(BaseModel):
    gamificationInsights: List[dict]
    activityMilestones: List[dict]
    engagementAnalytics: List[dict]


class UserImportExport(BaseModel):
    apiAccess: str


class Integration(BaseModel):
    id: int
    name: str
    description: str
    status: str


class SystemHealth(BaseModel):
    systemStatus: str
    performanceMetrics: dict


class TokenData(BaseModel):
    username: Optional[str] = None


class Token(BaseModel):
    access_token: str
    token_type: str
