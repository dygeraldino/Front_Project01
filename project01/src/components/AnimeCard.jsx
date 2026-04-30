import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

function AnimeCard({ anime }) {
  const image = anime.images?.jpg?.image_url
  const genres = anime.genres?.map((genre) => genre.name).slice(0, 2) || []

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-sm">
      <div className="relative">
        <img
          src={image}
          alt={`Portada de ${anime.title}`}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-night/80 px-3 py-1 text-xs font-semibold text-white">
            {anime.type || 'Anime'}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-night">
            {anime.title}
          </h3>
          <p className="text-xs text-slate-500">
            Puntaje: {anime.score || 'N/A'} · {anime.status || 'Sin estado'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
            >
              {genre}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <Link
            to={`/anime/${anime.mal_id}`}
            className="text-sm font-semibold text-night hover:text-aurora"
          >
            Ver detalle
          </Link>
          <FavoriteButton
            anime={{
              mal_id: anime.mal_id,
              title: anime.title,
              image,
              score: anime.score,
              type: anime.type,
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default AnimeCard
