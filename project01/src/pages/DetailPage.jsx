import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import FavoriteButton from '../components/FavoriteButton'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import { fetchAnimeById } from '../utils/api'

function DetailPage() {
  const { id } = useParams()
  const [anime, setAnime] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Definimos la funcion asincrona para obtener datos
    const loadDetail = async () => {
      setIsLoading(true) // Mostramos loader
      setError('')       // Limpiamos errores anteriores

      try {
        const data = await fetchAnimeById(id)
        setAnime(data.data) // Guardamos el anime recibido en el estado
      } catch (err) {
        setError(err.message) // Si hay error, actualizamos el estado pertinente
        toast.error('No se pudo cargar el detalle.')
      } finally {
        setIsLoading(false) // Siempre quitamos el estado de carga al terminar
      }
    }
    
    loadDetail() // Ejecutamos la funcion
  }, [id])

  if (isLoading) {
    return <LoadingState message="Cargando detalle..." />
  }

  if (error) {
    return <ErrorState message={error} />
  }

  if (!anime) {
    return (
      <ErrorState message="No se encontro el detalle solicitado." />
    )
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/90">
        <img
          src={anime.images?.jpg?.large_image_url}
          alt={`Poster de ${anime.title}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Link
          to="/explore"
          className="text-sm font-semibold text-slate-500 hover:text-night"
        >
          Volver a exploracion
        </Link>
        <h2 className="font-display text-3xl font-semibold text-night">
          {anime.title}
        </h2>
        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-white px-3 py-1">
            Score: {anime.score || 'N/A'}
          </span>
          <span className="rounded-full bg-white px-3 py-1">
            Ranking: {anime.rank || 'N/A'}
          </span>
          <span className="rounded-full bg-white px-3 py-1">
            Episodios: {anime.episodes || 'N/A'}
          </span>
          <span className="rounded-full bg-white px-3 py-1">
            Estado: {anime.status || 'N/A'}
          </span>
        </div>
        <p className="text-sm text-slate-600">{anime.synopsis}</p>
        <div className="flex flex-wrap gap-3">
          <FavoriteButton
            anime={{
              mal_id: anime.mal_id,
              title: anime.title,
              image: anime.images?.jpg?.image_url,
              score: anime.score,
              type: anime.type,
            }}
          />
          <a
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
          >
            Ver en MAL
          </a>
        </div>
      </div>
    </section>
  )
}

export default DetailPage
