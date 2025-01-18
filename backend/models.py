from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    role = Column(String)
    status = Column(String)
    contact_details = relationship("ContactDetail", back_populates="user")
    activity_logs = relationship("ActivityLog", back_populates="user")

class ContactDetail(Base):
    __tablename__ = "contact_details"

    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String)
    address = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="contact_details")

class ActivityLog(Base):
    __tablename__ = "activity_logs"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime)
    activity = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="activity_logs")

class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    permissions = Column(String)

class UserActivity(Base):
    __tablename__ = "user_activities"

    id = Column(Integer, primary_key=True, index=True)
    login_logout_logs = Column(String)
    activity_feed = Column(String)
    audit_trail = Column(String)

class CommunicationTool(Base):
    __tablename__ = "communication_tools"

    id = Column(Integer, primary_key=True, index=True)
    messages = Column(String)
    notifications = Column(String)
    feedback = Column(String)

class UserSubscription(Base):
    __tablename__ = "user_subscriptions"

    id = Column(Integer, primary_key=True, index=True)
    subscription_plan = Column(String)
    billing_history = Column(String)
    payment_methods = Column(String)

class DataExport(Base):
    __tablename__ = "data_exports"

    id = Column(Integer, primary_key=True, index=True)
    custom_reports = Column(String)
    analytics = Column(String)

class UserCompliance(Base):
    __tablename__ = "user_compliances"

    id = Column(Integer, primary_key=True, index=True)
    gdpr_compliance = Column(Boolean)
    terms_accepted = Column(Boolean)
    data_retention_policy = Column(String)

class UserCustomization(Base):
    __tablename__ = "user_customizations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    avatar = Column(String)
    bio = Column(String)
    theme = Column(String)

class UserEngagement(Base):
    __tablename__ = "user_engagements"

    id = Column(Integer, primary_key=True, index=True)
    gamification_insights = Column(String)
    activity_milestones = Column(String)
    engagement_analytics = Column(String)

class UserImportExport(Base):
    __tablename__ = "user_import_exports"

    id = Column(Integer, primary_key=True, index=True)
    api_access = Column(String)

class Integration(Base):
    __tablename__ = "integrations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    status = Column(String)

class SystemHealth(Base):
    __tablename__ = "system_healths"

    id = Column(Integer, primary_key=True, index=True)
    system_status = Column(String)
    performance_metrics = Column(String)
