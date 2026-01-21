import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/movies" replace />} />

        <Route path="/movies" element={<CatalogPage contentType="movie" />} />
        <Route path="/series" element={<CatalogPage contentType="series" />} />
        <Route path="/anime" element={<CatalogPage contentType="anime" />} />

        <Route path="/content/:id" element={<MoviePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}