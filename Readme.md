# QUEQUÉ

Quequé es una aplicación web que nos ayuda a decidir que podemos comer hoy.
Su funcionamiento es tan simple como eficiente: tocas un botón y te da 3 opciones.
Puedes revisar el detalle de esas 3 opciones y si alguna te gusta la guardas en tu perfil. 
Si no te gusta ninguna pulsa nuevamente el botón. 

## Contenido
- [ENDPOINTS SERVER](#endpoints-server).
- [URL CLIENTS](#url-clients).
- [PAGES](#pages).


---

## MODELOS: USER. PLACES. COMMENTS.

<pre>
		```javascript


    const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email obligatorio'],
      trim: true
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },

    password: {
      type: String,
      required: [true, 'Contraseña obligatoria'],
      trim: true
    },

    placesfavs: [String],

  },

  {
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;


 ```
 </pre>

 <pre>
		```javascript

        const { Schema, model } = require("mongoose");

const placesSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true
        },

        direction: {
            type: String,
            unique: true,
            required: [true, 'La dirección es necesaria'],
            trim: true
        },

        phone: {
            type: Number,
            unique: true,
            required: [true, 'Ingresa el número de teléfono'],
            trim: true
        },

        image: {
            type: String,
            required: [true, 'Sube una imagen'],

        },

        foodstyle: {
            type: String,
        },

        description: {
            type: String,
            required: [true, 'Introduce una descripción del establecimiento.'],

        },

        location: {
            type: {
                type: String,
            },
            coordinates: [Number],

        },
    },

    {
        timestamps: true,
    }

);

const Places = model("Places", placesSchema);

module.exports = Places;

</pre>

---

<pre>
		```javascript

        const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },

        place: {
            type: Schema.Types.ObjectId,
            ref: 'Place',
            require: true,
            
        },

        text: {
            type: String,
            require: [true, 'Describe tu experiencia']
        },

        score: {
            type: Number,
            min: 0,
            max: 5,
            require: [true, '¿Cuánto le das?']
        },

        date: {
            type: Date,
            default: Date.now
        }
    },
    
    {
        timestamps: true, 
    }

);

const Comments = model("Comments", placesSchema);

module.exports = Comments;

</pre>

---

## ENDPOINTS SERVER

| METHOD | API ENDPOINTS | DESCRIPTION |
|--------|---------------|-------------|
|GET|/|Página principal|  
|GET|/registro|Sign up|
|POST|/registro|Sing-up|
|GET|/iniciar-sesión|Log-in|
|POST|/iniciar-sesión|Log-in|
|GET|/perfil|Perfil|
|GET|/perfil/:id/editar-perfil|Editar perfil|
|POST|/perfil/:id/editar-perfil|Editar perfil|
|POST|/botonaleatorio|botón de lugares random|
|GET|/lugaruno/:id/detail|info de la opción|
|POST|/lugaruno/:id/save|guardar info de la opción|
|POST|/lugaruno/:id/delete|eliminar info de la opción|
|POST|/lugaruno/:id/coment|comentario sobre la opción|
|GET|/lugardos/:id/detail|info de la opción|
|POST|/lugardos/:id/save|guardar info de la opción|
|POST|/lugardos/:id/delete|eliminar info de la opción|
|POST|/lugardos/:id/coment|comentario sobre la opción|
|GET|/lugartres/:id/detail||info de la opción|
|POST|/lugartres/:id/save|guardar info de la opción|
|POST|/lugartres/:id/delete|eliminar info de la opción|
|POST|/lugartres/:id/coment|comentario sobre la opción|
|POST|/usuario/:id/eliminar-usuario|Eliminar usuario|
|GET|/api|Api|

---

## URL CLIENTS ¿Cuál es la forma corecta de expresar una URL?


| CLIENTS URL | DESCRIPTION | ROLES | PROTECTED |
|-------------|-------------|-------|-----------|
|"/"|Página de inicio|All|false|
|"/firstchoice/:id"|Página de elección 1|All|false|
|"/secondchoice/:id"|Página de elección 2|All|false|
|"/thirdchoice/:id"|Página de elección 3|All|false|
|"/signup"|Página de registro|All|false|
|"/login"|Página de inicio de sesión|User|true jwt|
|"/profile"|Perfil de usuario|User|true jwt|
|"*"|Gestión de errores|All|false|


---

## PAGES AND COMPONENTS. 
1. HomePage
2. LoginPage
3. SignUpPage
4. ChoicePage
5. ProfilePage


## PUNTOS CON INÉS

eliminar cada place 
editar cada place

## LISTO:

CREAR REPO
MODELOS USUARIO, PLACES, SERVIDOR
RUTA CREAR USUARIO
RUTA REGITRAR USUARIO
RUTA LOGUEAR USUARIO
RUTA CREAR LUGARES
RUTA BORRAR LUGARES 
RUTA EDIT PLACES
RUTA VERIFY
RUTA GUARDAR EN FAVORITOS 
RUTA ELIMINAR DE FAVORITOS 
CREAR UNA RUTA TIPO GET QUE ME SERVIRÁ PARA TRAER LOS PLACES. ME TRAIGO TODOS Y FILTER PARA OBTENER 3
LEVANTADO CLIENTE
CREADAS RUTAS DE:
-HOME
-LOGIN
-SIGNUP
CREADOS SERVICIOS DE AUTH
CREADO CONTEXT DE USER 
HACE LA LLAMADA PARA HACER EL VERiFY DE AUTHENTICATE USER
// crear un par de places con postman
// traer los places y pasarlos como prop a placeslist
Mostrarlos en place list con un place card por cada place:
se duplica el contenido
no se pinta el adress, pero su se ve en la pestaña respuesta de fetch
Crear el formualrio de new place form:
usar el servicoo de crear nuevo place en el form para crearlo en la BBDD
crear pagina de detalles de cada place











