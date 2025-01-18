from sqlmodel import Session
from backend.app.db.models import User, ContactDetail, ActivityLog, Role, UserActivity, CommunicationTool, UserSubscription, DataExport, UserCompliance, UserCustomization, UserEngagement, UserImportExport, Integration, SystemHealth
from backend.app.db.session import engine

def seed_users(session: Session):
    user1 = User(name="John Doe", email="john.doe@example.com", role="admin", status="active")
    user2 = User(name="Jane Smith", email="jane.smith@example.com", role="user", status="inactive")
    session.add(user1)
    session.add(user2)
    session.commit()

def seed_contact_details(session: Session):
    contact1 = ContactDetail(phone="123-456-7890", address="123 Main St", user_id=1)
    contact2 = ContactDetail(phone="987-654-3210", address="456 Elm St", user_id=2)
    session.add(contact1)
    session.add(contact2)
    session.commit()

def seed_activity_logs(session: Session):
    log1 = ActivityLog(date="2023-01-01", activity="Login", user_id=1)
    log2 = ActivityLog(date="2023-01-02", activity="Logout", user_id=2)
    session.add(log1)
    session.add(log2)
    session.commit()

def seed_roles(session: Session):
    role1 = Role(name="admin", permissions="all")
    role2 = Role(name="user", permissions="read")
    session.add(role1)
    session.add(role2)
    session.commit()

def seed_user_activity(session: Session):
    user_activity = UserActivity(login_logout_logs="Login, Logout", activity_feed="Activity1, Activity2", audit_trail="Audit1, Audit2")
    session.add(user_activity)
    session.commit()

def seed_communication_tools(session: Session):
    communication_tool = CommunicationTool(messages="Message1, Message2", notifications="Notification1, Notification2", feedback="Feedback1, Feedback2")
    session.add(communication_tool)
    session.commit()

def seed_user_subscription(session: Session):
    user_subscription = UserSubscription(subscription_plan="Plan1", billing_history="History1, History2", payment_methods="Method1, Method2")
    session.add(user_subscription)
    session.commit()

def seed_data_export(session: Session):
    data_export = DataExport(custom_reports="Report1, Report2", analytics="Analytics1, Analytics2")
    session.add(data_export)
    session.commit()

def seed_user_compliance(session: Session):
    user_compliance = UserCompliance(gdpr_compliance=True, terms_accepted=True, data_retention_policy="Policy1")
    session.add(user_compliance)
    session.commit()

def seed_user_customization(session: Session):
    user_customization = UserCustomization(name="Customization1", avatar="Avatar1", bio="Bio1", theme="Theme1")
    session.add(user_customization)
    session.commit()

def seed_user_engagement(session: Session):
    user_engagement = UserEngagement(gamification_insights="Insight1, Insight2", activity_milestones="Milestone1, Milestone2", engagement_analytics="Analytics1, Analytics2")
    session.add(user_engagement)
    session.commit()

def seed_user_import_export(session: Session):
    user_import_export = UserImportExport(api_access="Access1")
    session.add(user_import_export)
    session.commit()

def seed_integrations(session: Session):
    integration1 = Integration(name="Integration1", description="Description1", status="connected")
    integration2 = Integration(name="Integration2", description="Description2", status="disconnected")
    session.add(integration1)
    session.add(integration2)
    session.commit()

def seed_system_health(session: Session):
    system_health = SystemHealth(system_status="Healthy", performance_metrics="CPU: 10%, Memory: 20%")
    session.add(system_health)
    session.commit()

def seed_database():
    with Session(engine) as session:
        seed_users(session)
        seed_contact_details(session)
        seed_activity_logs(session)
        seed_roles(session)
        seed_user_activity(session)
        seed_communication_tools(session)
        seed_user_subscription(session)
        seed_data_export(session)
        seed_user_compliance(session)
        seed_user_customization(session)
        seed_user_engagement(session)
        seed_user_import_export(session)
        seed_integrations(session)
        seed_system_health(session)

if __name__ == "__main__":
    seed_database()
