import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const stats = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-mist mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    number: '10 000+',
    label: 'Animes en catalogo',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-mist mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    number: 'Multiples',
    label: 'Generos y demografias',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-mist mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    number: 'Millones',
    label: 'De fans en MyAnimeList',
  },
]

function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <section className="relative w-screen left-1/2 -translate-x-1/2 py-20 text-center">
        <p className="mb-10 text-xs font-bold uppercase tracking-widest text-[#768298]">
          EL ANIME EN NUMEROS
        </p>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto px-4">
          {stats.map((item, id) => (
            <article
              key={id}
              className="rounded-3xl border border-slate-100 bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)]"
            >
              {item.icon}
              <h3 className="mt-6 text-3xl font-black text-mist">
                {item.number}
              </h3>
              <p className="mt-2 text-sm text-[#768298]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative w-screen left-1/2 -translate-x-1/2 -mb-16 py-20 border-t border-slate-100 bg-[#f9f6fb] text-center">
        <h3 className="font-display text-4xl font-black text-night">
          ¿Por dónde empezamos?
        </h3>
        <p className="mt-4 text-[#768298] max-w-lg mx-auto">
          Filtra por genero, busca cualquier titulo y guarda los que mas te interesan.
        </p>
        <div className="mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-xl border border-mist px-8 py-3 text-sm font-bold text-mist transition hover:bg-mist hover:text-white"
          >
            Ver catálogo completo →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
