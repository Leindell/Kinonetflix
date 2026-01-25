import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

function formatRating(v) {
  if (v === null || v === undefined) return '—'
  const n = Number(v)
  if (Number.isNaN(n)) return '—'
  return n.toFixed(1)
}

export default function MovieCard({ movie }) {
  if (!movie) return null

  const posterSrc = movie.poster ? `/static/img/${movie.poster}` : null
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(movie.id)

  return (
    <div className="card">
      <button
        className="favBtn"
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(movie.id)
        }}
        title={fav ? 'Убрать из избранного' : 'В избранное'}
        aria-label={fav ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        {fav ? '★' : '☆'}
      </button>
 

 
      <Link className="card__posterLink" to={`/movie/${movie.id}`} aria-label={movie.title}>
        {posterSrc ? (
          <img
            className="card__poster"
            src={posterSrc}
            alt={`Постер: ${movie.title}`}
            loading="lazy"
          />
        ) : (
          <div className="card__posterPlaceholder">No poster</div>
        )}

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
          {movie.description ? <div className="card__hoverDesc">{movie.description}</div> : null}
        </div>
      </Link>
    </div>
  )
}
