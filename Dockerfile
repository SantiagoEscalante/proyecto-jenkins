# Usa una imagen de Node.js como base
FROM node:18 as build

RUN mkdir -p /app

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package.json /app

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY . /app

# Compila la aplicación Angular
RUN npm run build --prod

# Segunda etapa: crea una imagen Nginx para servir la aplicación Angular
FROM nginx:latest

# Copia los archivos de construcción desde la etapa anterior
COPY --from=build /app/dist/proyecto-jenkins /usr/share/nginx/html
