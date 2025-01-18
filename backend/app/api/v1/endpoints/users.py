from typing import List
from fastapi import APIRouter, HTTPException

from backend.app.schemas import UserOverview, User, UserProfile, Role, UserActivity, CommunicationTools, UserSubscription, \
    DataExport, UserCompliance, UserCustomization, UserEngagement, UserImportExport, Integration, SystemHealth
from backend.app.services import user_service

router = APIRouter()

@router.get("/user-overview", response_model=UserOverview)
async def get_user_overview():
    return user_service.get_user_overview()

@router.get("/users", response_model=List[User])
async def get_users():
    return user_service.get_users()

@router.get("/user-profile/{user_id}", response_model=UserProfile)
async def get_user_profile(user_id: int):
    return user_service.get_user_profile(user_id)

@router.get("/roles", response_model=List[Role])
async def get_roles():
    return user_service.get_roles()

@router.get("/user-activity", response_model=UserActivity)
async def get_user_activity():
    return user_service.get_user_activity()

@router.get("/communication-tools", response_model=CommunicationTools)
async def get_communication_tools():
    return user_service.get_communication_tools()

@router.get("/user-subscription", response_model=UserSubscription)
async def get_user_subscription():
    return user_service.get_user_subscription()

@router.get("/data-export", response_model=DataExport)
async def get_data_export():
    return user_service.get_data_export()

@router.get("/user-compliance", response_model=UserCompliance)
async def get_user_compliance():
    return user_service.get_user_compliance()

@router.get("/user-customization/{user_id}", response_model=UserCustomization)
async def get_user_customization(user_id: int):
    return user_service.get_user_customization(user_id)

@router.get("/user-engagement", response_model=UserEngagement)
async def get_user_engagement():
    return user_service.get_user_engagement()

@router.get("/user-import-export", response_model=UserImportExport)
async def get_user_import_export():
    return user_service.get_user_import_export()

@router.get("/integrations", response_model=List[Integration])
async def get_integrations():
    return user_service.get_integrations()

@router.get("/system-health", response_model=SystemHealth)
async def get_system_health():
    return user_service.get_system_health()
