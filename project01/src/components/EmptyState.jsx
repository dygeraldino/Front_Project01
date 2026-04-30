function EmptyState({ title, description, action, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      {icon && <div className="text-slate-300">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold text-night">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  )
}

export default EmptyState
