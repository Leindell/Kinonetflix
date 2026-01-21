# Frontend (React SPA)

## Запуск (Windows)

### 1) Backend

```bat
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python seed.py
python run.py
```

Backend поднимется на `http://127.0.0.1:5000`.

### 2) Frontend

Открой второй терминал:

```bat
cd frontend
npm install
npm run dev
```

Frontend поднимется на `http://127.0.0.1:5173`.

## Сборка SPA (prod)

```bat
cd frontend
npm run build
```

Папка `frontend/dist` будет отдаваться Flask автоматически (fallback для React Router настроен в `backend/app/__init__.py`).
