from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_maturity():
    return {'status': 'ok'}
