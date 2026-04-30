import toast from 'react-hot-toast'
import useFavorites from '../hooks/useFavorites'

function FavoriteButton({ anime }) {
  const { favorites, setFavorites } = useFavorites()
  const isFavorite = favorites.some((item) => item.mal_id === anime.mal_id)

  const handleToggle = () => {
    if (isFavorite) {
      setFavorites((prev) => prev.filter((item) => item.mal_id !== anime.mal_id))
      toast.success('Quitado de favoritos')
      return
    }

    setFavorites((prev) => [...prev, anime])
    toast.success('Agregado a favoritos')
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
        isFavorite
          ? 'bg-plasma text-white'
          : 'bg-white text-night ring-1 ring-slate-200'
      }`}
      aria-label={
        isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'
      }
    >
      {isFavorite ? 'Favorito' : 'Guardar'}
    </button>
  )
}

export default FavoriteButton
