from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

app = FastAPI()

# Define Pydantic models for request and response data
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

# Define API endpoints
@app.get("/api/user-overview", response_model=UserOverview)
async def get_user_overview():
    return {
        "totalUsers": 1000,
        "activeUsers": 800,
        "newRegistrations": 50,
        "inactiveUsers": 200
    }

@app.get("/api/users", response_model=List[User])
async def get_users():
    return [
        {"id": 1, "name": "John Doe", "email": "john@example.com", "role": "admin", "status": "active"},
        {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "role": "moderator", "status": "inactive"}
    ]

@app.get("/api/user-profile/{user_id}", response_model=UserProfile)
async def get_user_profile(user_id: int):
    if user_id == 1:
        return {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "role": "admin",
            "contactDetails": {"phone": "123-456-7890", "address": "123 Main St"},
            "activityLogs": [{"date": "2023-01-01", "activity": "Logged in"}]
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

@app.get("/api/roles", response_model=List[Role])
async def get_roles():
    return [
        {"id": 1, "name": "Admin", "permissions": ["read", "write", "admin"]},
        {"id": 2, "name": "Moderator", "permissions": ["read", "write"]}
    ]

@app.get("/api/user-activity", response_model=UserActivity)
async def get_user_activity():
    return {
        "loginLogoutLogs": [{"date": "2023-01-01", "action": "Logged in"}],
        "activityFeed": [{"date": "2023-01-01", "activity": "Posted a comment"}],
        "auditTrail": [{"date": "2023-01-01", "action": "Changed password"}]
    }

@app.get("/api/communication-tools", response_model=CommunicationTools)
async def get_communication_tools():
    return {
        "messages": [{"date": "2023-01-01", "content": "Hello"}],
        "notifications": [{"date": "2023-01-01", "content": "New message received"}],
        "feedback": [{"date": "2023-01-01", "content": "Great app!"}]
    }

@app.get("/api/user-subscription", response_model=UserSubscription)
async def get_user_subscription():
    return {
        "subscriptionPlan": "Premium",
        "billingHistory": [{"date": "2023-01-01", "amount": "$10", "status": "Paid"}],
        "paymentMethods": [{"id": 1, "type": "Credit Card", "last4": "1234"}]
    }

@app.get("/api/data-export", response_model=DataExport)
async def get_data_export():
    return {
        "customReports": [{"id": 1, "name": "Monthly Report", "description": "Report for January"}],
        "analytics": [{"metric": "Active Users", "value": 800}]
    }

@app.get("/api/user-compliance", response_model=UserCompliance)
async def get_user_compliance():
    return {
        "gdprCompliance": True,
        "termsAccepted": True,
        "dataRetentionPolicy": "Retain data for 1 year"
    }

@app.get("/api/user-customization/{user_id}", response_model=UserCustomization)
async def get_user_customization(user_id: int):
    if user_id == 1:
        return {
            "id": 1,
            "name": "John Doe",
            "avatar": "avatar.png",
            "bio": "Hello, I'm John",
            "theme": "light"
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

@app.get("/api/user-engagement", response_model=UserEngagement)
async def get_user_engagement():
    return {
        "gamificationInsights": [{"achievement": "First Login", "points": 10}],
        "activityMilestones": [{"milestone": "100 Posts", "date": "2023-01-01"}],
        "engagementAnalytics": [{"metric": "Daily Active Users", "value": 500}]
    }

@app.get("/api/user-import-export", response_model=UserImportExport)
async def get_user_import_export():
    return {
        "apiAccess": "Enabled"
    }

@app.get("/api/integrations", response_model=List[Integration])
async def get_integrations():
    return [
        {"id": 1, "name": "Slack", "description": "Slack integration", "status": "connected"},
        {"id": 2, "name": "Google Analytics", "description": "Google Analytics integration", "status": "disconnected"}
    ]

@app.get("/api/system-health", response_model=SystemHealth)
async def get_system_health():
    return {
        "systemStatus": "Operational",
        "performanceMetrics": {"cpuUsage": 50, "memoryUsage": 1024, "responseTime": 200}
    }
