import React from 'react'
import { Link } from 'react-router-dom'

function formatRating(v) {
  if (v === null || v === undefined) return '—'
  const n = Number(v)
  if (Number.isNaN(n)) return '—'
  return n.toFixed(1)
}

export default function MovieCard({ movie }) {
  const posterSrc = movie.poster ? `/static/img/${movie.poster}` : null

  return (
    <div className="card">
      <Link className="card__posterLink" to={`/content/${movie.id}`} aria-label={movie.title}>
        {posterSrc ? (
          <img className="card__poster" src={posterSrc} alt={`Постер: ${movie.title}`} loading="lazy" />
        ) : (
          <div className="card__posterPlaceholder">No poster</div>
        )}

        {/* Hover overlay снизу, как ты описал */}
        <div className="card__hover">
          <div className="card__hoverTitle">{movie.title}</div>
          <div className="card__hoverMeta">
            {movie.year || '—'} • {movie.genre || '—'}
          </div>
          <div className="card__hoverRatings">
            <span className="chip">КП {formatRating(movie.rating_kp)}</span>
            <span className="chip">IMDb {formatRating(movie.rating_imdb)}</span>
            <span className="chip">Моя {formatRating(movie.rating_personal)}</span>
          </div>
          {movie.description ? (
            <div className="card__hoverDesc">{movie.description}</div>
          ) : null}
        </div>
      </Link>

      {/* Низ карточки (виден всегда) */}
      <div className="card__footer">
        <div className="card__title" title={movie.title}>{movie.title}</div>
        <div className="card__meta">{movie.year || '—'} • {movie.genre || '—'}</div>
      </div>
    </div>
  )
}
