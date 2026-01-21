import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ContentPage.css";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;

    setErr("");
    setMovie(null);

    fetch(`/api/movies/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Не удалось загрузить фильм");
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setMovie(data);
      })
      .catch((e) => {
        if (!cancelled) setErr(e.message || "Ошибка загрузки");
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  // Постеры лежат в backend/app/static/img
  const posterSrc = useMemo(() => {
    if (!movie?.poster) return "";
    return `/static/img/${movie.poster}`;
  }, [movie]);

  // Фоны лежат в backend/app/static/backgrounds
  const bgSrc = useMemo(() => {
    if (!movie?.background) return "";
    return `/static/backgrounds/${movie.background}`;
  }, [movie]);

  const heroStyle = useMemo(() => {
    return bgSrc ? { backgroundImage: `url(${bgSrc})` } : {};
  }, [bgSrc]);

  const backTo = useMemo(() => {
    if (!movie?.type) return "/movies";
    if (movie.type === "series") return "/series";
    if (movie.type === "anime") return "/anime";
    return "/movies";
  }, [movie]);

  if (err) {
    return (
      <div className="page">
        <div className="topbar">
          <Link className="back" to="/movies">
            ← Назад
          </Link>
        </div>
        <div className="error">{err}</div>
      </div>
    );
  }

  if (!movie) return <div className="page">Загрузка...</div>;

  return (
    <div className="page">
      <div className="topbar">
        <Link className="back" to={backTo}>
          ← Назад
        </Link>
      </div>

      <section className="hero" style={heroStyle}>
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="poster-wrap">
            {posterSrc ? (
              <img className="poster" src={posterSrc} alt={movie.title} />
            ) : (
              <div className="poster placeholder">No poster</div>
            )}
          </div>

          <div className="meta">
            <div className="title-row">
              <h1 className="title">{movie.title}</h1>
              {movie.year ? <span className="year">{movie.year}</span> : null}
            </div>

            <div className="genre">{movie.genre || "—"}</div>

            <div className="ratings">
              <div className="rate">
                <div className="rate-label">Кинопоиск</div>
                <div className="rate-value">{movie.rating_kp ?? "—"}</div>
              </div>
              <div className="rate">
                <div className="rate-label">IMDb</div>
                <div className="rate-value">{movie.rating_imdb ?? "—"}</div>
              </div>
              <div className="rate">
                <div className="rate-label">Моя</div>
                <div className="rate-value">{movie.rating_personal ?? "—"}</div>
              </div>
            </div>

            <p className="desc">{movie.description || "Описание отсутствует."}</p>

            <div className="actions">
              <a
                className="watch"
                href={movie.watch_url || "#"}
                target="_blank"
                rel="noreferrer"
              >
                Смотреть
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
