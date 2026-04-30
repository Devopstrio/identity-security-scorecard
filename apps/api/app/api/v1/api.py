from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, scorecards, risk, benchmarks, maturity, reports, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(scorecards.router, prefix="/scorecards", tags=["scorecards"])
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(benchmarks.router, prefix="/benchmarks", tags=["benchmarks"])
api_router.include_router(maturity.router, prefix="/maturity", tags=["maturity"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
