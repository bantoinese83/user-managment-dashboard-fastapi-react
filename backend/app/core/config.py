from sqlmodel import create_engine

SQLALCHEMY_DATABASE_URL = "sqlite:///./backend/test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
