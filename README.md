# AnimeDex

SPA construida con Vite + React. Consume la API pública de Jikan (MyAnimeList) para explorar animes, ver detalles a fondo y gestionar favoritos.

## Características

- **Gestión Local:** Colección de favoritos guardada en el `localStorage` del navegador.
- **Visuales:** Diseño y estructura 100% basados en Tailwind CSS.

## Rutas

- `/` Inicio y métricas referenciales
- `/explore` Buscador centralizado
- `/anime/:id` Tarjeta de detalles y puntuación
- `/favorites` Catálogo y gestión individual
- `/contact` Formulario web
- `*` 404 Not Found

## Tecnologías

React, React Router DOM, Vite, Tailwind CSS, Jikan API (V4), React Hot Toast.

## Ejecución Local

1. Ingresa a la carpeta raíz:
   ```bash
   cd project01
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor:
   ```bash
   npm run dev
   ```
