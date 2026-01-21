from app import db


class Movie(db.Model):
    """Фильм/сериал/аниме в каталоге."""

    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)
    year = db.Column(db.Integer, nullable=True)
    genre = db.Column(db.String(200), nullable=True)
    description = db.Column(db.Text, nullable=True)

    # movie | series | anime
    type = db.Column(db.String(20), nullable=False, default="movie")

    # рейтинги
    rating_kp = db.Column(db.Float, nullable=True)
    rating_imdb = db.Column(db.Float, nullable=True)
    rating_personal = db.Column(db.Float, nullable=True)

    # имя файла постера (лежит в backend/app/static/posters/)
    poster = db.Column(db.String(255), nullable=True)

    # имя файла фона (лежит в backend/app/static/backgrounds/)
    background = db.Column(db.String(255), nullable=True)

    # ссылка "где смотреть"
    watch_url = db.Column(db.String(500), nullable=True)

    # признак "в избранном"
    is_favorite = db.Column(db.Boolean, default=False)

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "year": self.year,
            "genre": self.genre,
            "description": self.description,
            "type": self.type,
            "rating_kp": self.rating_kp,
            "rating_imdb": self.rating_imdb,
            "rating_personal": self.rating_personal,
            "poster": self.poster,
            "background": self.background,
            "watch_url": self.watch_url,
            "is_favorite": self.is_favorite,
        }

    def __repr__(self) -> str:
        return f"<Movie id={self.id} title={self.title!r}>"
