import { apiGet, buildQuery } from './client.js'

export function fetchMovies({ type, genre, q, sort, order }) {
  const qs = buildQuery({ type, genre, q, sort, order })
  return apiGet(`/api/movies${qs}`)
}

export function fetchMovie(id) {
  return apiGet(`/api/movies/${id}`)
}

export function fetchGenres() {
  return apiGet('/api/genres')
}
