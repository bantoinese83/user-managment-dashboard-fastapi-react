import os
from sqlmodel import Session, create_engine

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./backend/test.db")
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

def get_session():
    with Session(engine) as session:
        yield session


class SessionLocal:
    def __init__(self):
        self._session = None

    def __enter__(self):
        self._session = Session(engine)
        return self._session

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._session.close()
        self._session = None
