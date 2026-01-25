import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

function navClass({ isActive }) {
  return isActive ? 'nav-link nav-link--active' : 'nav-link'
}

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
const { favorites } = useFavorites()
const favCount = favorites?.length ?? 0

  const [q, setQ] = React.useState(() => {
    return new URLSearchParams(location.search).get('q') || ''
  })

  React.useEffect(() => {
    setQ(new URLSearchParams(location.search).get('q') || '')
  }, [location.search])

  function onSubmit(e) {
    e.preventDefault()
    const params = new URLSearchParams(location.search)
    if (q.trim()) {
      params.set('q', q.trim())
    } else {
      params.delete('q')
    }
    navigate({ pathname: location.pathname, search: params.toString() })
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">🎬 Kinonetflix</div>

     <nav className="nav">
  <NavLink to="/movies" className={navClass}>Фильмы</NavLink>
  <NavLink to="/series" className={navClass}>Сериалы</NavLink>
  <NavLink to="/anime" className={navClass}>Аниме</NavLink>
  <NavLink to="/favorites" className={navClass}>Избранное</NavLink>
</nav>


        <form className="search" onSubmit={onSubmit}>
          <input
            className="search__input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Поиск по названию, жанру, описанию"
          />
          <button className="btn btn--primary" type="submit">Найти</button>
        </form>
      </div>
    </header>
  )
}
