import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage";
import MoviePage from "./pages/MoviePage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<CatalogPage contentType="movie" />} />
        <Route path="/series" element={<CatalogPage contentType="series" />} />
        <Route path="/anime" element={<CatalogPage contentType="anime" />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<div style={{ padding: 16 }}>404</div>} />
      </Route>
    </Routes>
  );
}
