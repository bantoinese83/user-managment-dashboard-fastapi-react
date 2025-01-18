from fastapi import HTTPException
from sqlalchemy.orm import Session
from backend.app.db.models import User, Role, UserActivity, CommunicationTool, UserSubscription, DataExport, UserCompliance, UserCustomization, UserEngagement, UserImportExport, Integration, SystemHealth
from backend.app.db.session import get_session


def get_user_overview(db: Session = get_session()):
    total_users = db.query(User).count()
    active_users = db.query(User).filter(User.status == "active").count()
    new_registrations = db.query(User).filter(User.status == "new").count()
    inactive_users = db.query(User).filter(User.status == "inactive").count()
    return {
        "totalUsers": total_users,
        "activeUsers": active_users,
        "newRegistrations": new_registrations,
        "inactiveUsers": inactive_users
    }

def get_users(db: Session = get_session()):
    return db.query(User).all()

def get_user_profile(user_id: int, db: Session = get_session()):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        contact_details = {
            "phone": user.contact_details.phone,
            "address": user.contact_details.address
        }
        activity_logs = [
            {"date": log.date, "activity": log.activity}
        for log in user.activity_logs]
        return {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role,
            "contactDetails": contact_details,
            "activityLogs": activity_logs
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

def get_roles(db: Session = get_session()):
    return db.query(Role).all()

def get_user_activity(db: Session = get_session()):
    user_activity = db.query(UserActivity).first()
    if user_activity:
        return {
            "loginLogoutLogs": user_activity.login_logout_logs,
            "activityFeed": user_activity.activity_feed,
            "auditTrail": user_activity.audit_trail
        }
    return None

def get_communication_tools(db: Session = get_session()):
    communication_tools = db.query(CommunicationTool).first()
    if communication_tools:
        return {
            "messages": communication_tools.messages,
            "notifications": communication_tools.notifications,
            "feedback": communication_tools.feedback
        }
    return None

def get_user_subscription(db: Session = get_session()):
    user_subscription = db.query(UserSubscription).first()
    if user_subscription:
        return {
            "subscriptionPlan": user_subscription.subscription_plan,
            "billingHistory": user_subscription.billing_history,
            "paymentMethods": user_subscription.payment_methods
        }
    return None

def get_data_export(db: Session = get_session()):
    data_export = db.query(DataExport).first()
    if data_export:
        return {
            "customReports": data_export.custom_reports,
            "analytics": data_export.analytics
        }
    return None

def get_user_compliance(db: Session = get_session()):
    user_compliance = db.query(UserCompliance).first()
    if user_compliance:
        return {
            "gdprCompliance": user_compliance.gdpr_compliance,
            "termsAccepted": user_compliance.terms_accepted,
            "dataRetentionPolicy": user_compliance.data_retention_policy
        }
    return None

def get_user_customization(user_id: int, db: Session = get_session()):
    user_customization = db.query(UserCustomization).filter(UserCustomization.id == user_id).first()
    if user_customization:
        return {
            "id": user_customization.id,
            "name": user_customization.name,
            "avatar": user_customization.avatar,
            "bio": user_customization.bio,
            "theme": user_customization.theme
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

def get_user_engagement(db: Session = get_session()):
    user_engagement = db.query(UserEngagement).first()
    if user_engagement:
        return {
            "gamificationInsights": user_engagement.gamification_insights,
            "activityMilestones": user_engagement.activity_milestones,
            "engagementAnalytics": user_engagement.engagement_analytics
        }
    return None

def get_user_import_export(db: Session = get_session()):
    user_import_export = db.query(UserImportExport).first()
    if user_import_export:
        return {
            "apiAccess": user_import_export.api_access
        }
    return None

def get_integrations(db: Session = get_session()):
    return db.query(Integration).all()

def get_system_health(db: Session = get_session()):
    system_health = db.query(SystemHealth).first()
    if system_health:
        return {
            "systemStatus": system_health.system_status,
            "performanceMetrics": system_health.performance_metrics
        }
    return None
