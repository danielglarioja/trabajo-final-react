PROYECTO FINAL INTEGRADOR 
REACT - NODE

Daniel Ardiles 

El presente proyecto se desarrolla siguiendo las consignas indicadas en el "CURSO TÉCNICO #6: INTEGRADOR"

CURSO TÉCNICO #6: INTEGRADOR
Premisas:
El curso Integrador deberá:
1. Aplicar las 3 tecnologías: Node, React y React Native.
    ***En este proyecto se aplican 2 tecnologías: Node, React.

2. Darles a los participantes una elección libre de la temática:
a) Lugares turísticos de La Rioja.
b) Puntos de vacunación contra COVID-19.
c) Locales de gastronomía.
d) Paradas de colectivo.
    ***Tematica elegida: Opcion c) Locales de gastronomía. "Restaurants de La Rioja"

3. El recurso elegido por la temática debe ser geolocalizable. Se debe incluir un campo
a una URL de imagen.
    ***Recurso geolocalizable. incluye campo a una URL.

4. Tener bien definidos la cantidad de actividades y objetivos de cada una.
    ***Se Listan todos los restaurants disponibles, con acceso a comentarios y ubicacion.
    ***Se accede a lectura detalles del restaurant seleccionado y los comentarios recibidos.
    ***Permite Logueo simple de usuario para agregar sus propios comentarios.
    ***CRUD para crear, editar y/o eliminar comentarios.
    ***Acceso a la guiaMaps de todos los restaurants listados.

## Extras
Login basico: Permite que solo los usuarios registrados puedan crear, editar y/o eliminar sus propios comentarios.
Select tipo de cocina: Buscador de restaurants por tipo de cosina.
GuiaMaps: Se comparte link de googleMaps con todos los restaurants mostrados en este proyecto.

## Base de datos "mongodb" Atlas
https://cloud.mongodb.com/v2/611aff1c959e07037c5e2460#metrics/replicaSet/611affec2cc2071c7c6fea24/explorer/larioja_restaurants

## Repositorio de Github
    https://github.com/danielglarioja/trabajo-final-integrador.git

## Run proyect
In the project directory, you can run:
Backend `nodemon server`, Frontend `npm start`

### Runs the app PORT
Frontend http://localhost:3000 , Backend http://localhost:5000 to view it in the browser.

###  Endpoints CRUD 
*Metodo: GET
Todos los restaurantes (ruta principal)
http://localhost:5000/api/v1/restaurants

Todos los comentarios de un restaurant:
http://localhost:5000/api/v1/restaurants/review/id/aqui numero de restaurant_id

Todas la cocinas:
http://localhost:5000/api/v1/restaurants/cuisines


*Metodo: POST
Agregar un comentario en un restaurant:
http://localhost:5000/api/v1/restaurants/review
y agregar lo siguiente desde el body 
{
"restaurant_id":"numero de id de algun restaurant ya existente",
"text":"texto del comentario",
"user_id":"aqui el password",
"name":"nombre del usuario"
}

*Metodo: PUT
Editar un determinado comentario en un restaurant.
http://localhost:5000/api/v1/restaurants/review
y en el body:(ejemplo)
{
"review_id":"61272b83aa4d240f3ca0b808", <--aqui el numero de review
"text":"editadoooo desde postman", 	<--aqui el nuevo texto
"user_id":"1234",       		<--aqui el mismo id o contraseña
"name":"daniel"        			<--aqui el mismo usuario
}

*Metodo: DELETE
Borrar un comentario (se debe tener el id del comentario)
http://localhost:5000/api/v1/restaurants/review?id=61272b83aa4d240f3ca0b808
y en el body solo el usuario y contraseña:(ejemplo)
{
"user_id":"1234",      <--aqui debe ser mismo id o contraseña
"name":"daniel"        <--aqui el mismo usuario
}
### Pendiente
    redux


