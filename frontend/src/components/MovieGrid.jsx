import React from 'react'
import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ items }) {
  if (!items || items.length === 0) {
    return <div className="muted">Ничего не найдено.</div>
  }

  return (
    <div className="grid">
      {items.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}
