from sqlalchemy.orm import Session
import models
import schemas


def get_user_overview(db: Session):
    total_users = db.query(models.User).count()
    active_users = db.query(models.User).filter(models.User.status == "active").count()
    new_registrations = db.query(models.User).filter(models.User.status == "new").count()
    inactive_users = db.query(models.User).filter(models.User.status == "inactive").count()
    return schemas.UserOverview(
        totalUsers=total_users,
        activeUsers=active_users,
        newRegistrations=new_registrations,
        inactiveUsers=inactive_users
    )

def get_users(db: Session):
    return db.query(models.User).all()

def get_user_profile(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user:
        contact_details = {
            "phone": user.contact_details.phone,
            "address": user.contact_details.address
        }
        activity_logs = [
            {"date": log.date, "activity": log.activity}
        for log in user.activity_logs]
        return schemas.UserProfile(
            id=user.id,
            name=user.name,
            email=user.email,
            role=user.role,
            contactDetails=contact_details,
            activityLogs=activity_logs
        )
    return None

def get_roles(db: Session):
    return db.query(models.Role).all()

def get_user_activity(db: Session):
    user_activity = db.query(models.UserActivity).first()
    if user_activity:
        return schemas.UserActivity(
            loginLogoutLogs=user_activity.login_logout_logs,
            activityFeed=user_activity.activity_feed,
            auditTrail=user_activity.audit_trail
        )
    return None

def get_communication_tools(db: Session):
    communication_tools = db.query(models.CommunicationTool).first()
    if communication_tools:
        return schemas.CommunicationTools(
            messages=communication_tools.messages,
            notifications=communication_tools.notifications,
            feedback=communication_tools.feedback
        )
    return None

def get_user_subscription(db: Session):
    user_subscription = db.query(models.UserSubscription).first()
    if user_subscription:
        return schemas.UserSubscription(
            subscriptionPlan=user_subscription.subscription_plan,
            billingHistory=user_subscription.billing_history,
            paymentMethods=user_subscription.payment_methods
        )
    return None

def get_data_export(db: Session):
    data_export = db.query(models.DataExport).first()
    if data_export:
        return schemas.DataExport(
            customReports=data_export.custom_reports,
            analytics=data_export.analytics
        )
    return None

def get_user_compliance(db: Session):
    user_compliance = db.query(models.UserCompliance).first()
    if user_compliance:
        return schemas.UserCompliance(
            gdprCompliance=user_compliance.gdpr_compliance,
            termsAccepted=user_compliance.terms_accepted,
            dataRetentionPolicy=user_compliance.data_retention_policy
        )
    return None

def get_user_customization(db: Session, user_id: int):
    user_customization = db.query(models.UserCustomization).filter(models.UserCustomization.id == user_id).first()
    if user_customization:
        return schemas.UserCustomization(
            id=user_customization.id,
            name=user_customization.name,
            avatar=user_customization.avatar,
            bio=user_customization.bio,
            theme=user_customization.theme
        )
    return None

def get_user_engagement(db: Session):
    user_engagement = db.query(models.UserEngagement).first()
    if user_engagement:
        return schemas.UserEngagement(
            gamificationInsights=user_engagement.gamification_insights,
            activityMilestones=user_engagement.activity_milestones,
            engagementAnalytics=user_engagement.engagement_analytics
        )
    return None

def get_user_import_export(db: Session):
    user_import_export = db.query(models.UserImportExport).first()
    if user_import_export:
        return schemas.UserImportExport(
            apiAccess=user_import_export.api_access
        )
    return None

def get_integrations(db: Session):
    return db.query(models.Integration).all()

def get_system_health(db: Session):
    system_health = db.query(models.SystemHealth).first()
    if system_health:
        return schemas.SystemHealth(
            systemStatus=system_health.system_status,
            performanceMetrics=system_health.performance_metrics
        )
    return None
