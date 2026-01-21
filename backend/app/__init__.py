"""Инициализация приложения (Application Factory).

Здесь создаётся Flask app и подключаются расширения/роуты.
"""

import os

from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy

# Расширение SQLAlchemy создаём глобально, привязываем позже в create_app()
db = SQLAlchemy()


def create_app() -> Flask:
    """
    Фабрика приложения.
    Возвращает готовый экземпляр Flask с подключённой БД и роутами.
    """
    flask_app = Flask(__name__, instance_relative_config=True)

    # SQLite база (в папке instance)
    os.makedirs(flask_app.instance_path, exist_ok=True)
    db_path = os.path.join(flask_app.instance_path, "movies.db")
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}".replace("\\", "/")
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(flask_app)

    # Подключаем blueprint'ы
    from app.routes import bp as main_blueprint
    flask_app.register_blueprint(main_blueprint)

    from app.api import bp as api_blueprint
    flask_app.register_blueprint(api_blueprint, url_prefix="/api")

    # Создаём таблицы при первом запуске
    with flask_app.app_context():
        from app.models import Movie  # noqa: F401 (нужно для регистрации модели)
        db.create_all()

    # =====================
    # Продакшн-режим: отдаём собранный SPA (frontend/dist)
    # =====================
    # В dev React запускается отдельно (Vite), эти роуты не мешают.
    spa_dist = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "dist"))
    flask_app.config["SPA_DIST"] = spa_dist

    if os.path.isdir(spa_dist):
        @flask_app.get("/")
        def spa_index():
            return send_from_directory(spa_dist, "index.html")

        @flask_app.get("/<path:path>")
        def spa_fallback(path: str):
            # Статику SPA (assets/*) отдаём как файл, остальное — index.html (для React Router)
            full_path = os.path.join(spa_dist, path)
            if os.path.isfile(full_path):
                return send_from_directory(spa_dist, path)
            return send_from_directory(spa_dist, "index.html")

    return flask_app
