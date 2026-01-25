import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SortBar from "../components/SortBar";
import { useFavorites } from "../hooks/useFavorites";

function safeNum(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : -Infinity;
}

export default function FavoritesPage() {
  const { isFavorite } = useFavorites();

  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const [sortKey, setSortKey] = useState("title");
  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setErr("");

    fetch("/api/movies")
      .then((r) => {
        if (!r.ok) throw new Error("Не удалось загрузить список фильмов");
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setMovies(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        if (!cancelled) setErr(e.message || "Ошибка");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const favItems = useMemo(() => {
    return (movies || []).filter((m) => isFavorite?.(m.id));
  }, [movies, isFavorite]);

  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;

    return [...favItems].sort((a, b) => {
      if (sortKey === "title") {
        const A = (a?.title || "").toLowerCase();
        const B = (b?.title || "").toLowerCase();
        return A.localeCompare(B) * dir;
      }
      if (sortKey === "rating") return (safeNum(a?.rating) - safeNum(b?.rating)) * dir;
      if (sortKey === "year") return (safeNum(a?.year) - safeNum(b?.year)) * dir;
      return 0;
    });
  }, [favItems, sortKey, sortDir]);

  if (err) {
    return (
      <div className="page">
        <div className="topbar">
          <Link className="back" to="/movies">← Назад</Link>
        </div>
        <div className="error">{err}</div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="topbar">
        <Link className="back" to="/movies">← Назад</Link>
      </div>

      <h1 style={{ marginTop: 0 }}>Избранное</h1>

      <SortBar
        sortKey={sortKey}
        sortDir={sortDir}
        onChangeKey={setSortKey}
        onToggleDir={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        total={sorted.length}
      />

      {loading ? (
        <div className="muted">Загрузка…</div>
      ) : sorted.length === 0 ? (
        <div className="empty">Пока пусто. Нажми ⭐ на карточке — и фильм появится здесь.</div>
      ) : (
        <div className="grid">
          {sorted.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}
