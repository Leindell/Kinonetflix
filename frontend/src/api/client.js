export async function apiGet(path) {
  const res = await fetch(path, {
    headers: { Accept: 'application/json' }
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API ${res.status}: ${text}`)
  }

  return res.json()
}

export function buildQuery(params) {
  const qs = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue
    const str = String(value).trim()
    if (!str) continue
    qs.set(key, str)
  }
  const s = qs.toString()
  return s ? `?${s}` : ''
}
