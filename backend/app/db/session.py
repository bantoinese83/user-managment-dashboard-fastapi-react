from sqlmodel import Session, create_engine

SQLALCHEMY_DATABASE_URL = "sqlite:///./backend/test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

def get_session():
    with Session(engine) as session:
        yield session
