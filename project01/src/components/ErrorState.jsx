function ErrorState({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#f97316"
        className="mb-4 h-16 w-16"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>

      <h3 className="text-lg text-plasma">No se pudo cargar la información.</h3>
      <p className="mt-1 text-sm text-plasma">
        Verifica tu conexion e intenta de nuevo.
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded bg-[#ea4335] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorState
