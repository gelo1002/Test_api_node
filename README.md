# API_TEST
Repositorio de test de una API node.js

# Crear base de datos
1. Debes crear una base de datos MySQL vacía

# Crear y configurar archivo env
1. Copia el archivo de ejemplo de configuración:
   cp .env.example .env
2. Agrega los valores correspondientes de la Api y la DB al archivo .env

# Instalar dependencias
1. npm install

# Migrations
1. Correr migraciones para crear las tablas correspondientes
   npm run migrations:run
2. (opcional) Si tienes la necesidad de eliminar todas las tablas puede ejecutar lo siguiente
   npm run migrations:delete


# Comandos para correr la API
1. npm run build
2. npm run start

# Cometarios
la documentacion del swagger esta en la ruta "{{url_api:puerto}}/api-docs" ejemplo: "http://localhost:3000/api-docs"