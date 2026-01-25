import { useCallback, useEffect, useMemo, useState } from "react";

const KEY = "favorites:v1";

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function write(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
}

export function useFavorites() {
  const [ids, setIds] = useState(() => read());

  useEffect(() => {
    write(ids);
  }, [ids]);

  const set = useMemo(() => new Set(ids), [ids]);

  const isFavorite = useCallback((id) => set.has(Number(id)), [set]);

  const toggleFavorite = useCallback((id) => {
    const n = Number(id);
    setIds((prev) => {
      const s = new Set(prev);
      if (s.has(n)) s.delete(n);
      else s.add(n);
      return Array.from(s);
    });
  }, []);

  return { favoriteIds: ids, isFavorite, toggleFavorite };
}
