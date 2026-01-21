import React from 'react'

export default function Toolbar({
  genres,
  genre,
  setGenre,
  sort,
  setSort,
  order,
  setOrder
}) {
  return (
    <div className="toolbar">
      <label className="toolbar__field">
        <span className="toolbar__label">Жанр</span>
        <select className="toolbar__select" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Все</option>
          {(genres || []).map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </label>

      <label className="toolbar__field">
        <span className="toolbar__label">Сортировка</span>
        <select className="toolbar__select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="title">По названию</option>
          <option value="year">По году</option>
          <option value="rating_kp">По КП</option>
          <option value="rating_imdb">По IMDb</option>
          <option value="rating_personal">По моей</option>
        </select>
      </label>

      <label className="toolbar__field">
        <span className="toolbar__label">Порядок</span>
        <select className="toolbar__select" value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Возрастание</option>
          <option value="desc">Убывание</option>
        </select>
      </label>
    </div>
  )
}
