# Petxpo

Proyecto realizado con React, utilizando únicamente componentes funcionales con hooks.

La gestión de la base de datos se realiza mediante Firebase Realtime Database. Además se han cargado 11 perfiles de mascotas y likes aleatorios a través de Firebase Storage, y se han registrado varias cuentas de usuario mediante Firebase Authentication.

El proyecto cuenta con 3 vistas (SignIn, Home y PetDetail), y se gestiona la autenticación de los usuarios para garantizar que un usuario sólo puede dar un 'me gusta' a cada mascota, para poder recuperar los 'me gusta' del usuario y para proteger la información de la aplicación de personas no registradas.

Por otro lado se han utilizado dos contextos, uno para la gestión de las sesiones y otro para la gestión de los filtros de búsqueda de las mascotas por tipos.

## Instrucciones

- Haz fork del repositorio.

- Clona el repositorio.

- En tu proyecto local clonado, añade el archivo .env facilitado.

- En la consola, en la carpeta raíz del proyecto ejecuta 'npm start', y el proyecto se iniciará en localhost:3000