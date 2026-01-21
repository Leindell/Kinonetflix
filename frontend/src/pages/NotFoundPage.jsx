import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p className="muted">Страница не найдена</p>
      <Link className="btn" to="/movies">На главную</Link>
    </div>
  )
}
