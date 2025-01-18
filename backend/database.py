from sqlmodel import SQLModel, create_engine, Session

SQLALCHEMY_DATABASE_URL = "sqlite:///./backend/test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create the database tables
SQLModel.metadata.create_all(engine)

# Create a session
def get_session():
    with Session(engine) as session:
        yield session

def create_all():
    SQLModel.metadata.create_all(engine)
