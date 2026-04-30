const API_BASE = 'https://api.jikan.moe/v4'

// 1. OBTENER LISTA DE ANIMES
// Usamos async/await para manejar la respuesta del servidor
async function fetchAnimeList({ query, type, status, page, limit }) {
  // Construimos la URL base
  const url = new URL(`${API_BASE}/anime`)
  
  // Agregamos los parametros de busqueda si existen
  if (query) url.searchParams.set('q', query)
  if (type) url.searchParams.set('type', type)
  if (status) url.searchParams.set('status', status)
  
  url.searchParams.set('page', page)
  url.searchParams.set('limit', limit)

  // Hacemos la peticion a la API
  const response = await fetch(url)
  
  // Si hay error en la peticion, lanzamos un error que capturaremos en el componente
  if (!response.ok) {
    throw new Error('No se pudo cargar la lista de animes.')
  }
  
  // Retornamos la respuesta en formato JSON
  return response.json()
}

// 2. OBTENER DETALLE DE UN ANIME POR SU ID
async function fetchAnimeById(id) {
  const response = await fetch(`${API_BASE}/anime/${id}`)
  
  if (!response.ok) {
    throw new Error('No se pudo cargar el detalle del anime.')
  }
  
  return response.json()
}

export { fetchAnimeById, fetchAnimeList }
