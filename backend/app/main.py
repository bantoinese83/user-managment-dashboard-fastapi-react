from typing import List

import uvicorn
from fastapi import FastAPI

from backend.app.db.base import create_all
from backend.app.db.schemas import UserOverview, User, UserProfile, Role, UserActivity, CommunicationTools, \
    UserSubscription, \
    DataExport, UserCompliance, UserCustomization, UserEngagement, UserImportExport, Integration, SystemHealth
from backend.app.middlewares.middlewares import init_middlewares
from backend.app.services import user_service

app = FastAPI()

create_all()

init_middlewares(app)

# Define API endpoints
@app.get("/api/user-overview", response_model=UserOverview)
async def get_user_overview():
    return user_service.get_user_overview()

@app.get("/api/users", response_model=List[User])
async def get_users():
    return user_service.get_users()

@app.get("/api/user-profile/{user_id}", response_model=UserProfile)
async def get_user_profile(user_id: int):
    return user_service.get_user_profile(user_id)

@app.get("/api/roles", response_model=List[Role])
async def get_roles():
    return user_service.get_roles()

@app.get("/api/user-activity", response_model=UserActivity)
async def get_user_activity():
    return user_service.get_user_activity()

@app.get("/api/communication-tools", response_model=CommunicationTools)
async def get_communication_tools():
    return user_service.get_communication_tools()

@app.get("/api/user-subscription", response_model=UserSubscription)
async def get_user_subscription():
    return user_service.get_user_subscription()

@app.get("/api/data-export", response_model=DataExport)
async def get_data_export():
    return user_service.get_data_export()

@app.get("/api/user-compliance", response_model=UserCompliance)
async def get_user_compliance():
    return user_service.get_user_compliance()

@app.get("/api/user-customization/{user_id}", response_model=UserCustomization)
async def get_user_customization(user_id: int):
    return user_service.get_user_customization(user_id)

@app.get("/api/user-engagement", response_model=UserEngagement)
async def get_user_engagement():
    return user_service.get_user_engagement()

@app.get("/api/user-import-export", response_model=UserImportExport)
async def get_user_import_export():
    return user_service.get_user_import_export()

@app.get("/api/integrations", response_model=List[Integration])
async def get_integrations():
    return user_service.get_integrations()

@app.get("/api/system-health", response_model=SystemHealth)
async def get_system_health():
    return user_service.get_system_health()

# Run the FastAPI app
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)