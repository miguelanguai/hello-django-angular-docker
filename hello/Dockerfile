# Etapa 1: Construcción de la aplicación Angular
FROM node:18-alpine AS build

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto Angular al contenedor
COPY package*.json ./

# Instala las dependencias de Angular
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Angular para producción: # -- --prod
RUN npm run build -- --prod

# Etapa 2: Servir la aplicación Angular con un servidor web
FROM nginx:alpine

# Copia el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para el servidor Nginx
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
