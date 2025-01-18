from sqlmodel import SQLModel, create_engine

SQLALCHEMY_DATABASE_URL = "sqlite:///./backend/test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create the database tables
SQLModel.metadata.create_all(engine)


def create_all():
    SQLModel.metadata.create_all(engine)