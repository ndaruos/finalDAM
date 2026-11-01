Mi Biblioteca App - Backend

API REST que fue desarrollada en Node.js y Express para la gestión de libros y usuarios de la aplicación
"Mi Biblioteca", integrada con Supabase como base de datos.

Tecnologías Utilizadas
* Node.js
* Express
* Supabase (JavaScript Client)
* Dotenv

Instrucciones para correr el proyecto localmente

    Clonar el repositorio e ingresar a la carpeta del proyecto. Vía CMD correr los siguientes comandos:
    git clone https://github.com/ndaruos/finalDAM.git
    cd finalDAM
    code .

Instalar las dependencias con comando: npm install

Renombrar el .env.example a .env y agregar las llaves correspondientes de Supabase

Estructura del Proyecto

    config/: Configuración y cliente de conexión con Supabase.

    routes/: Definición de los endpoints de la API (librosRoutes.js, usuariosRoutes.js).

    controllers/: Controladores con la lógica para el manejo de respuestas de libros y usuarios (librosController.js, usuariosController.js).

    services/: Capa de servicios para la interacción directa con las tablas de la base de datos (librosService.js, usuariosService.js).