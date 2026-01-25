import React from "react";
import { useSearchParams } from 'react-router-dom'
import { fetchGenres, fetchMovies } from '../api/movies.js'
import MovieGrid from '../components/MovieGrid.jsx'
import Toolbar from '../components/Toolbar.jsx'

export default function CatalogPage({ contentType }) {
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q') || ''
  const [genre, setGenre] = React.useState('')
  const [sort, setSort] = React.useState('title')
  const [order, setOrder] = React.useState('asc')
  const [genres, setGenres] = React.useState([])
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    let cancelled = false
    fetchGenres()
      .then((g) => {
        if (!cancelled) setGenres(g)
      })
      .catch(() => {

      })
    return () => { cancelled = true }
  }, [])

  React.useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')

    fetchMovies({ type: contentType, genre, q, sort, order })
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .catch((e) => {
        if (!cancelled) setError(e.message || 'Ошибка загрузки')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [contentType, genre, q, sort, order])

  const title = contentType === 'movie' ? 'Фильмы' : contentType === 'series' ? 'Сериалы' : 'Аниме'

  return (
    <div className={`page page--${contentType}`}>
      <div className="page__head">
        <h1 className="page__title">{title}</h1>
        {q ? <div className="page__subtitle">Поиск: «{q}»</div> : null}
      </div>

      <Toolbar
        genres={genres}
        genre={genre}
        setGenre={setGenre}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />

      {error ? <div className="alert">{error}</div> : null}

      {loading ? (
        <div className="muted">Загрузка…</div>
      ) : (
        <MovieGrid items={items} />
      )}
    </div>
  )
}
