import { createContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)

const STORAGE_KEY = 'project01:favorites'

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo(() => ({ favorites, setFavorites }), [favorites])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export { FavoritesContext, FavoritesProvider }
