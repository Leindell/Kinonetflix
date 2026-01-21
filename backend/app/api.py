from flask import Blueprint, jsonify, request
from app.models import Movie

bp = Blueprint("api", __name__, url_prefix="/api")


@bp.get("/movies")
def get_movies():
    """
    /api/movies?type=anime&genre=Action&sort=title&order=asc&q=...
    sort: title | year | rating_kp | rating_imdb | rating_personal
    order: asc | desc
    """
    q = Movie.query

    content_type = request.args.get("type")
    if content_type:
        q = q.filter(Movie.type == content_type)

    genre = request.args.get("genre")
    if genre:
        q = q.filter(Movie.genre.ilike(f"%{genre}%"))

    search = request.args.get("q")
    if search:
        s = f"%{search}%"
        q = q.filter((Movie.title.ilike(s)) | (Movie.description.ilike(s)))

    sort = request.args.get("sort", "title")
    order = request.args.get("order", "asc")

    sort_map = {
        "title": Movie.title,
        "year": Movie.year,
        "rating_kp": Movie.rating_kp,
        "rating_imdb": Movie.rating_imdb,
        "rating_personal": Movie.rating_personal,
    }
    sort_col = sort_map.get(sort, Movie.title)
    q = q.order_by(sort_col.desc() if order == "desc" else sort_col.asc())

    items = [m.to_dict() for m in q.all()]
    return jsonify(items)


@bp.get("/movies/<int:movie_id>")
def get_movie(movie_id: int):
    movie = Movie.query.get_or_404(movie_id)
    return jsonify(movie.to_dict())


@bp.get("/genres")
def get_genres():
    all_genres = set()
    for (g,) in Movie.query.with_entities(Movie.genre).all():
        if not g:
            continue
        for part in [p.strip() for p in g.split(",")]:
            if part:
                all_genres.add(part)
    return jsonify(sorted(all_genres))
