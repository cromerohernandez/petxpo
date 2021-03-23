# Petxpo

## Descripción

Proyecto realizado con React, utilizando únicamente componentes funcionales con hooks.

La gestión de la base de datos se realiza mediante Firebase Realtime Database. Además se han cargado 11 perfiles de mascotas y likes aleatorios a través de Firebase Storage, y se han registrado varias cuentas de usuario mediante Firebase Authentication.

El proyecto cuenta con 3 vistas (SignIn, Home y PetDetail), y se gestiona la autenticación de los usuarios para garantizar que un usuario sólo puede dar un 'me gusta' a cada mascota, para poder recuperar los 'me gusta' del usuario y para proteger la información de la aplicación de personas no registradas.

Por otro lado se han utilizado dos contextos, uno para la gestión de las sesiones y otro para la gestión de los filtros de búsqueda de las mascotas por tipos.

## Instrucciones

- Haz fork del repositorio.

- Clona el repositorio.

- En tu proyecto local clonado, añade el archivo .env facilitado.

- En la consola, en la carpeta raíz del proyecto ejecuta 'npm install', para instalar las dependencias del package.json.

- En la consola, en la carpeta raíz del proyecto ejecuta 'npm start', y el proyecto se iniciará en localhost:3000

## Documentación

El proyecto trabaja sobre una base de datos que consta de 3 modelos: *user*, *pet* y *like*.

Dentro de la carpeta *src* aparece la siguiente estructuración:

* *assets* → incluye la carpeta *images* con todas los archivos png utilizados en las vistas de la web.
* *components* → componentes de React estructurados de la siguiente manera:
  * *auth*: componentes de autenticación, para proteger las rutas de la web y para mostrar el formulario de acceso.
  * *pets*: componentes relacionados con la muestra de datos del modelo *pet*.
  * *UI*: componentes de elementos de la interfaz (navbar, botones, ...)
  * *App.js*: gestiona el acceso a las rutas de la web, protegidas según los critrerios de autenticación.
  * *Home.js*: vista principal de la web para el usuario que ha iniciado sesión.
* *contexts*: incluye la definicición de los contextos de autenticación (usado en todas las vistas) y de filtro de búsqueda de máscotas (utilizado en la vista *Home*)
* *helpers*: funciones de ayuda para métodos de los componentes.
* *services*: configuración de la API (Firebase) y de las llamadas a la misma.
* *stylesheets*: archivos css de definición de los estilos de la interfaz. Se organiza con la misma estructura de carpetas y nombres que la carpeta *components*.
* *index.js*: archivo raíz del proyecto, donde se conecta con el *index.html* y se definen los niveles de aplicación de los proveedores de contextos sobre los componentes principales (*Navbar*, *App* y *Footer*).