# FastAPI Application with JWT Authentication

This repository contains a FastAPI application with JWT authentication. Follow the instructions below to set up and run the application.

## Requirements

- Python 3.7+
- FastAPI
- Uvicorn
- Pydantic
- SQLAlchemy
- PyJWT

## Setup

### Backend

1. Clone the repository:

```bash
git clone https://github.com/githubnext/workspace-blank.git
cd workspace-blank/backend
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the database migrations (if any):

```bash
# Add your database migration commands here
```

5. Start the FastAPI application:

```bash
uvicorn backend.main:app --reload
```

6. Open your browser and navigate to `http://127.0.0.1:8000/docs` to access the automatically generated Swagger UI documentation.

### Frontend

1. Navigate to the `frontend` directory:

```bash
cd ../frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Start the React application:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to view the frontend application.

## Project Structure

### Backend

- `backend/main.py`: The main entry point of the application, containing the FastAPI instance and route definitions.
- `backend/auth.py`: Contains authentication-related functions and utilities, such as creating and verifying JWT tokens.
- `backend/models.py`: Defines the data models used in the application.
- `backend/database.py`: Sets up the database connection and session.
- `backend/schemas.py`: Defines the Pydantic schemas for request and response validation.
- `backend/crud.py`: Contains the CRUD (Create, Read, Update, Delete) operations for interacting with the database.

### Frontend

- `frontend/src/main.tsx`: The main entry point of the React application.
- `frontend/src/App.tsx`: The main React component.
- `frontend/src/index.css`: The main CSS file for Tailwind CSS styles.

## Endpoints

- `POST /register`: Register a new user.
- `POST /token`: Obtain a JWT token by providing username and password.
- `GET /users/me`: Get the current authenticated user's information.

## License

This project is licensed under the MIT License.
