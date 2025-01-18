from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.app.db.models import User
from backend.app.db.schemas import UserOverview, UserProfile, Role, UserActivity, CommunicationTools, UserSubscription, \
    DataExport, UserCompliance, UserCustomization, UserEngagement, UserImportExport, Integration, SystemHealth
from backend.app.db.session import get_session

router = APIRouter()

@router.get("/user-overview", response_model=UserOverview)
def get_user_overview(db: Session = Depends(get_session)):
    total_users = db.query(User).count()
    active_users = db.query(User).filter(User.status == "active").count()
    new_registrations = db.query(User).filter(User.status == "new").count()
    inactive_users = db.query(User).filter(User.status == "inactive").count()
    return UserOverview(
        totalUsers=total_users,
        activeUsers=active_users,
        newRegistrations=new_registrations,
        inactiveUsers=inactive_users
    )

@router.get("/users", response_model=List[User])
def get_users(db: Session = Depends(get_session)):
    return db.query(User).all()

@router.get("/user-profile/{user_id}", response_model=UserProfile)
def get_user_profile(user_id: int, db: Session = Depends(get_session)):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        contact_details = {
            "phone": user.contact_details.phone,
            "address": user.contact_details.address
        }
        activity_logs = [
            {"date": log.date, "activity": log.activity}
        for log in user.activity_logs]
        return UserProfile(
            id=user.id,
            name=user.name,
            email=user.email,
            role=user.role,
            contactDetails=contact_details,
            activityLogs=activity_logs
        )
    return None

@router.get("/roles", response_model=List[Role])
def get_roles(db: Session = Depends(get_session)):
    return db.query(Role).all()

@router.get("/user-activity", response_model=UserActivity)
def get_user_activity(db: Session = Depends(get_session)):
    user_activity = db.query(UserActivity).first()
    if user_activity:
        return UserActivity(
            loginLogoutLogs=user_activity.login_logout_logs,
            activityFeed=user_activity.activity_feed,
            auditTrail=user_activity.audit_trail
        )
    return None

@router.get("/communication-tools", response_model=CommunicationTools)
def get_communication_tools(db: Session = Depends(get_session)):
    communication_tools = db.query(CommunicationTools).first()
    if communication_tools:
        return CommunicationTools(
            messages=communication_tools.messages,
            notifications=communication_tools.notifications,
            feedback=communication_tools.feedback
        )
    return None

@router.get("/user-subscription", response_model=UserSubscription)
def get_user_subscription(db: Session = Depends(get_session)):
    user_subscription = db.query(UserSubscription).first()
    if user_subscription:
        return UserSubscription(
            subscriptionPlan=user_subscription.subscription_plan,
            billingHistory=user_subscription.billing_history,
            paymentMethods=user_subscription.payment_methods
        )
    return None

@router.get("/data-export", response_model=DataExport)
def get_data_export(db: Session = Depends(get_session)):
    data_export = db.query(DataExport).first()
    if data_export:
        return DataExport(
            customReports=data_export.custom_reports,
            analytics=data_export.analytics
        )
    return None

@router.get("/user-compliance", response_model=UserCompliance)
def get_user_compliance(db: Session = Depends(get_session)):
    user_compliance = db.query(UserCompliance).first()
    if user_compliance:
        return UserCompliance(
            gdprCompliance=user_compliance.gdpr_compliance,
            termsAccepted=user_compliance.terms_accepted,
            dataRetentionPolicy=user_compliance.data_retention_policy
        )
    return None

@router.get("/user-customization/{user_id}", response_model=UserCustomization)
def get_user_customization(user_id: int, db: Session = Depends(get_session)):
    user_customization = db.query(UserCustomization).filter(UserCustomization.id == user_id).first()
    if user_customization:
        return UserCustomization(
            id=user_customization.id,
            name=user_customization.name,
            avatar=user_customization.avatar,
            bio=user_customization.bio,
            theme=user_customization.theme
        )
    return None

@router.get("/user-engagement", response_model=UserEngagement)
def get_user_engagement(db: Session = Depends(get_session)):
    user_engagement = db.query(UserEngagement).first()
    if user_engagement:
        return UserEngagement(
            gamificationInsights=user_engagement.gamification_insights,
            activityMilestones=user_engagement.activity_milestones,
            engagementAnalytics=user_engagement.engagement_analytics
        )
    return None

@router.get("/user-import-export", response_model=UserImportExport)
def get_user_import_export(db: Session = Depends(get_session)):
    user_import_export = db.query(UserImportExport).first()
    if user_import_export:
        return UserImportExport(
            apiAccess=user_import_export.api_access
        )
    return None

@router.get("/integrations", response_model=List[Integration])
def get_integrations(db: Session = Depends(get_session)):
    return db.query(Integration).all()

@router.get("/system-health", response_model=SystemHealth)
def get_system_health(db: Session = Depends(get_session)):
    system_health = db.query(SystemHealth).first()
    if system_health:
        return SystemHealth(
            systemStatus=system_health.system_status,
            performanceMetrics=system_health.performance_metrics
        )
    return None
