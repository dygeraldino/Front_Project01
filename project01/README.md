# Proyecto 01 - AnimeDex

SPA construida con Vite + React. Consume la API publica de Jikan (MyAnimeList) para explorar animes, ver detalles y gestionar favoritos.

## Rutas disponibles

- `/` Home (landing)
- `/explore` Exploracion con busqueda y filtros
- `/anime/:id` Detalle dinamico
- `/favorites` Favoritos
- `/contact` Formulario con validacion y modal
- `*` 404

## Tecnologias

- React + Vite
- React Router
- Tailwind CSS
- Jikan API
- react-hot-toast

## Como ejecutar

1. Instala dependencias:
   - `npm install`
2. Levanta el entorno:
   - `npm run dev`
3. Abre `http://localhost:5173`

## Notas

- Favoritos persisten en `localStorage`.
- Reintenta si la API responde con limite temporal.
