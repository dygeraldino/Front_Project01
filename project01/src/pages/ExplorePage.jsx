import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'
import toast from 'react-hot-toast'
import AnimeCard from '../components/AnimeCard'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FiltersBar from '../components/FiltersBar'
import LoadingState from '../components/LoadingState'
import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'
import { fetchAnimeList } from '../utils/api'

function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') || ''
  const type = searchParams.get('type') || ''
  const status = searchParams.get('status') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  // Aplicamos el hook de debounce a nuestra query
  const debouncedQuery = useDebounce(query, 500)

  // Este Hook se ejecuta cada vez que cambian los filtros o la pagina
  useEffect(() => {
    // Definimos una funcion asincrona dentro del useEffect
    const loadData = async () => {
      setIsLoading(true) // Mostramos el loader
      setError('')       // Limpiamos los errores

      try {
        // Llamamos a nuestra funcion de API
        const data = await fetchAnimeList({
          query: debouncedQuery,
          type,
          status,
          page,
          limit: 12,
        })
        
        // Guardamos los resultados
        setResults(data.data || [])
        setPagination(data.pagination || null)

        // Mostrar un pequeño aviso si la lista esta vacia
        if ((data.data || []).length === 0) {
          toast.info('No se encontraron resultados con esos filtros.')
        }
      } catch (err) {
        // Si la peticion falla, guardamos el mensaje de error
        setError(err.message)
        toast.error('No se pudo cargar la exploración.')
      } finally {
        // Pase lo que pase, ocultamos el loader al terminar
        setIsLoading(false)
      }
    }

    // Ejecutamos la funcion
    loadData()
    
    // NOTA DIDACTICA: Hemos quitado logica compleja de limpieza (AbortController) 
    // para hacer más simple de aprender y entender esta lección básica.
  }, [debouncedQuery, type, status, page, refreshKey])

  const handleSearchChange = (value) => {
    setSearchParams(prev => {
      if (value) prev.set('q', value)
      else prev.delete('q')
      prev.set('page', '1')
      return prev
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleTypeChange = (value) => {
    setSearchParams(prev => {
      if (value) prev.set('type', value)
      else prev.delete('type')
      prev.set('page', '1')
      return prev
    })
  }

  const handleStatusChange = (value) => {
    setSearchParams(prev => {
      if (value) prev.set('status', value)
      else prev.delete('status')
      prev.set('page', '1')
      return prev
    })
  }

  const canPrev = page > 1
  const canNext = pagination?.has_next_page

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Exploración"
        subtitle="Busca animes en la API de MyAnimeList y guarda tus favoritos."
      />
      <SearchBar value={query} onChange={handleSearchChange} onSubmit={handleSubmit} />
      <FiltersBar
        type={type}
        status={status}
        onTypeChange={handleTypeChange}
        onStatusChange={handleStatusChange}
      />

      {isLoading ? (
        <LoadingState message="Cargando resultados..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => setRefreshKey((prev) => prev + 1)} />
      ) : results.length === 0 ? (
        <EmptyState
          title="Sin resultados"
          description="Ajusta la búsqueda o cambia los filtros para seguir explorando."
        />
      ) : (
        <>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Mostrando {results.length} resultados</span>
            <span>Pagina {page}</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 disabled:opacity-40"
              onClick={() => {
                setSearchParams(prev => {
                  prev.set('page', Math.max(page - 1, 1).toString())
                  return prev
                })
              }}
              disabled={!canPrev}
            >
              Anterior
            </button>
            <button
              type="button"
              className="rounded-full bg-night px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
              onClick={() => {
                setSearchParams(prev => {
                  prev.set('page', (page + 1).toString())
                  return prev
                })
              }}
              disabled={!canNext}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ExplorePage
