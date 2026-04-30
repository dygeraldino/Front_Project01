import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SectionHeader from '../components/SectionHeader'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactPage() {
  const dialogRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})

  const errors = {
    name: form.name.trim().length < 2,
    email: !emailRegex.test(form.email),
    message: form.message.trim().length < 10,
  }

  const isValid = !errors.name && !errors.email && !errors.message

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isValid) return
    dialogRef.current?.showModal()
  }

  const handleConfirm = () => {
    toast.success('Mensaje enviado con éxito')
    setForm({ name: '', email: '', message: '' })
    setTouched({})
    dialogRef.current?.close()
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Contacto"
        subtitle="Escribenos para sugerencias, feedback o colaboraciones."
      />
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-3xl border border-white/70 bg-white/80 p-8"
      >
        <label className="flex flex-col gap-2 text-sm text-slate-600" htmlFor="name">
          Nombre
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            className={`rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
              touched.name && errors.name
                ? 'border-plasma focus:ring-plasma/30'
                : 'border-slate-200 focus:ring-aurora/30'
            }`}
            aria-invalid={touched.name && errors.name}
            aria-describedby="name-error"
          />
          {touched.name && errors.name ? (
            <span id="name-error" className="text-xs text-plasma">
              El nombre debe tener al menos 2 caracteres
            </span>
          ) : null}
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-600" htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            className={`rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
              touched.email && errors.email
                ? 'border-plasma focus:ring-plasma/30'
                : 'border-slate-200 focus:ring-aurora/30'
            }`}
            aria-invalid={touched.email && errors.email}
            aria-describedby="email-error"
          />
          {touched.email && errors.email ? (
            <span id="email-error" className="text-xs text-plasma">
              Ingresa un email valido (debe contener @ y .)
            </span>
          ) : null}
        </label>

        <label
          className="flex flex-col gap-2 text-sm text-slate-600"
          htmlFor="message"
        >
          Mensaje
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange('message')}
            onBlur={handleBlur('message')}
            className={`rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
              touched.message && errors.message
                ? 'border-plasma focus:ring-plasma/30'
                : 'border-slate-200 focus:ring-aurora/30'
            }`}
            aria-invalid={touched.message && errors.message}
            aria-describedby="message-error"
          ></textarea>
          {touched.message && errors.message ? (
            <span id="message-error" className="text-xs text-plasma">
              El mensaje debe tener al menos 10 caracteres
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="rounded bg-aurora px-6 py-3 text-sm font-semibold text-night transition-opacity hover:opacity-90 disabled:bg-aurora/50"
        >
          Enviar mensaje
        </button>
      </form>

      <dialog
        ref={dialogRef}
        className="rounded-3xl border border-white/70 bg-white p-6 text-left shadow-xl"
      >
        <h3 className="font-display text-xl font-semibold text-night">
          Confirmar envio
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          ¿Confirmas que deseas enviar este mensaje?
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-500"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-full bg-aurora px-5 py-2 text-sm font-semibold text-night"
          >
            Confirmar envio
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default ContactPage
