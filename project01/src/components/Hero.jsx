import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative -mt-10 w-screen left-1/2 -translate-x-1/2 bg-[#0a0715] text-white flex justify-center py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center px-4 sm:px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-mist">
          Jikan.moe API
        </p>
        <h1 className="font-display text-5xl font-black leading-tight sm:text-7xl">
          Descubre el <span className="text-mist">Anime</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Información detallada de cada serie japonesa en el planeta. Búsqueda, filtros
          y colección de favoritos.
        </p>
        <div className="mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-xl bg-mist px-8 py-3 text-sm font-bold text-night transition hover:opacity-90 hover:shadow-[0_0_20px_rgba(217,163,192,0.3)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Explorar catálogo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
