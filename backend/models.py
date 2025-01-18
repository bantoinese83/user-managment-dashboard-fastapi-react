from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str = Field(index=True, unique=True)
    role: str
    status: str
    contact_details: List["ContactDetail"] = Relationship(back_populates="user")
    activity_logs: List["ActivityLog"] = Relationship(back_populates="user")

class ContactDetail(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    phone: str
    address: str
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    user: Optional[User] = Relationship(back_populates="contact_details")

class ActivityLog(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    date: datetime
    activity: str
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    user: Optional[User] = Relationship(back_populates="activity_logs")

class Role(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True)
    permissions: str

class UserActivity(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    login_logout_logs: str
    activity_feed: str
    audit_trail: str

class CommunicationTool(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    messages: str
    notifications: str
    feedback: str

class UserSubscription(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    subscription_plan: str
    billing_history: str
    payment_methods: str

class DataExport(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    custom_reports: str
    analytics: str

class UserCompliance(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    gdpr_compliance: bool
    terms_accepted: bool
    data_retention_policy: str

class UserCustomization(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    avatar: str
    bio: str
    theme: str

class UserEngagement(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    gamification_insights: str
    activity_milestones: str
    engagement_analytics: str

class UserImportExport(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    api_access: str

class Integration(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: str
    status: str

class SystemHealth(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    system_status: str
    performance_metrics: str