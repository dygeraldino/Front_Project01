const typeOptions = [
  { value: '', label: 'Todos los tipos' },
  { value: 'tv', label: 'Series TV' },
  { value: 'movie', label: 'Peliculas' },
  { value: 'ova', label: 'OVA' },
  { value: 'special', label: 'Especiales' },
]

const statusOptions = [
  { value: '', label: 'Todos los estados' },
  { value: 'airing', label: 'En emision' },
  { value: 'complete', label: 'Finalizado' },
  { value: 'upcoming', label: 'Proximamente' },
]

function FiltersBar({ type, status, onTypeChange, onStatusChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm text-slate-600">
        Tipo
        <select
          value={type}
          onChange={(event) => onTypeChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-aurora focus:outline-none focus:ring-2 focus:ring-aurora/30"
        >
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-600">
        Estado
        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-aurora focus:outline-none focus:ring-2 focus:ring-aurora/30"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default FiltersBar
