# Use an official Node.js runtime as a parent image
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de configuración de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código de tu proyecto al contenedor
COPY . .

# Compila la aplicación Angular (esto puede variar dependiendo de tu configuración)
RUN npm run build

# Expone el puerto 80 en el contenedor
EXPOSE 4200

# Define el comando para iniciar la aplicación
CMD [ "npm", "start" ]
