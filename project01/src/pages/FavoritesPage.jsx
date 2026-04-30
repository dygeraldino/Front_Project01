import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState'
import SectionHeader from '../components/SectionHeader'
import useFavorites from '../hooks/useFavorites'

function FavoritesPage() {
  const { favorites, setFavorites } = useFavorites()
  const dialogRef = useRef(null)
  const [pending, setPending] = useState(null)

  const handleAskRemove = (anime) => {
    setPending(anime)
    dialogRef.current?.showModal()
  }

  const handleRemove = () => {
    if (!pending) return
    const dialog = dialogRef.current
    if (dialog && dialog.open) {
      dialog.close()
    }
    setFavorites((prev) => prev.filter((item) => item.mal_id !== pending.mal_id))
    toast.info('Favorito eliminado')
  }

  const handleCancel = () => {
    const dialog = dialogRef.current
    if (dialog && dialog.open) {
      dialog.close()
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Favoritos"
        subtitle={favorites.length === 1 ? "Tienes 1 anime guardado en tu selección." : `Tienes ${favorites.length} animes guardados en tu selección.`}
      />

      {favorites.length === 0 ? (
        <EmptyState
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-20 w-20"
            >
              <path d="M12 .587l3.668 7.431 8.2l1.192 6.01-5.938 5.787 1.402 8.165L12 21.05l-7.332 3.856 1.402-8.165-5.938-5.787 8.2-1.192z" />
            </svg>
          }
          title="No tienes favoritos guardados"
          description=""
          action={
            <Link
              to="/explore"
              className="text-[#0bc2e5] hover:underline"
            >
              Explorar y agregar algunos
            </Link>
          }
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((anime) => (
            <article
              key={anime.mal_id}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/90"
            >
              <img
                src={anime.image}
                alt={`Portada de ${anime.title}`}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-lg font-semibold text-night">
                  {anime.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Score: {anime.score || 'N/A'} · {anime.type || 'Anime'}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    to={`/anime/${anime.mal_id}`}
                    className="text-sm font-semibold text-night hover:text-aurora"
                  >
                    Ver detalle
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleAskRemove(anime)}
                    className="rounded-full bg-plasma px-4 py-2 text-xs font-semibold text-white"
                    aria-label={`Quitar ${anime.title} de favoritos`}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="rounded border-none bg-white p-8 text-center shadow-xl backdrop:bg-black/50"
        onClose={() => setPending(null)}
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#f97316"
            className="mb-4 h-12 w-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-xl font-bold text-night">
            Quitar de favoritos?
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Estas seguro de que quieres quitar a <strong className="text-night">{pending?.title}</strong> de tus favoritos?
          </p>
          <div className="mt-8 flex w-full justify-center gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded bg-slate-200 px-6 py-2 text-sm font-semibold text-night transition hover:bg-slate-300"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="rounded bg-[#ea4335] px-6 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Quitar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default FavoritesPage
