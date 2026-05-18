# Etapa 1: Construcción
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copiar archivos de dependencias de la subcarpeta project01
COPY project01/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la subcarpeta project01
COPY project01/ .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine AS production-stage

# Copiar configuración personalizada de Nginx para SPA (React)
COPY project01/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
