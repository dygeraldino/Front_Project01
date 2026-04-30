import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex grow flex-col items-center justify-center p-8 text-center">
      <h1 className="text-[120px] font-black leading-none text-[#0bc2e5]">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold text-night">
        Pagina no encontrada
      </h2>
      <p className="mt-2 text-base text-slate-500">
        La ruta que buscas no existe en esta aplicacion.
      </p>
      <Link
        to="/"
        className="mt-8 rounded bg-[#0bc2e5] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
