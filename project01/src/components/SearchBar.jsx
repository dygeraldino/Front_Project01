function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur sm:flex-row"
      role="search"
      aria-label="Buscador de anime"
    >
      <label className="sr-only" htmlFor="search">
        Buscar anime
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Busca por titulo..."
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-aurora focus:outline-none focus:ring-2 focus:ring-aurora/30"
      />
      <button
        type="submit"
        className="rounded-xl bg-night px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
