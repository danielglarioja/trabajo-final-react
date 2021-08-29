PROYECTO FINAL INTEGRADOR 
REACT - NODE

Daniel Ardiles 

Este proyecto se desarrolla siguiendo las consignas indicadas en el "CURSO TÉCNICO #6: INTEGRADOR"

CURSO TÉCNICO #6: INTEGRADOR
Premisas:

1. ***En este proyecto se aplican 2 tecnologías: Node, React.

2. ***Tematica elegida: Opcion c) Locales de gastronomía. "Restaurants de La Rioja"

3. ***Recurso geolocalizable. incluye campo a una URL.

4. Funcionalidad:
    ***Se Listan varios restaurants con acceso a comentarios y ubicacion usando coordenadas de cada restaurant.
    ***Se accede a lectura detalles del restaurant seleccionado y los comentarios recibidos.
    ***Permite Logueo simple de usuario para agregar sus propios comentarios.
    ***Incluye CRUD para crear, editar y/o eliminar comentarios.
    ***Acceso a la guiaMaps de todos los restaurants listados.

## Extras
Login basico: Permite que solo los usuarios registrados puedan crear, editar y/o eliminar sus propios comentarios.
Select tipo de cocina: Buscador de restaurants por tipo de cosina.
GuiaMaps: Se comparte link de googleMaps con todos los restaurants mostrados en este proyecto.

## Base de datos "mongodb" Atlas
https://cloud.mongodb.com/v2/611aff1c959e07037c5e2460#metrics/replicaSet/611affec2cc2071c7c6fea24/explorer/larioja_restaurants

## Repositorio de Github
    https://github.com/danielglarioja/trabajo-final-react.git

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




