# Usa una imagen de Node.js como base
FROM node:18 AS build

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Segunda etapa: crea una imagen Nginx para servir la aplicación Angular
FROM nginx:latest

# Copia los archivos de construcción desde la etapa anterior
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

# Opcional: si necesitas configuraciones personalizadas de Nginx, copia tu archivo de configuración nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 (el puerto predeterminado de Nginx)
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
