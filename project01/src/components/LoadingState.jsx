function LoadingState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/70 bg-white/80 px-6 py-10 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-aurora/40 border-t-aurora"></div>
      <p className="text-sm text-slate-500">{message || 'Cargando datos...'}</p>
    </div>
  )
}

export default LoadingState
