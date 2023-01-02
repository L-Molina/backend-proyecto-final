# backend-proyecto-final: Entrega Final

## Como instalar

1. Forkear y clonar el repositorio

2. Parado en la raíz del proyecto correr los siguientes comandos para instalar todas las dependecias del servidor:

   ```
   cd server
   npm install
   ```

3. Para correr el servidor, usar el siguiente comando:

   ```
   node app.js
   ```

Nota: El servidor se encontrara en http://localhost:8080

4. Desde ese mismo directorio, correr los siguientes commandos para instalar todas las dependencias del cliente:

   ```
   cd ..
   cd client
   npm install
   ```

5. Para correr el cliente, usar el siguiente comando:

   ```
   npm start
   ```

Nota: El cliente se encontrara disponible en http://localhost:3000
   
5. Crear la siguiente variable de entorno:
   
   MONGO_URL= mongo Atlas URL

## Como usar

Es un e-commerce dedicado a la venta de diferentes comidos (como hamburguesas o fideos), donde se puede iniciar sesion creando tu propio usuario.

Ademas el administrador puede crear, editar y eliminar productos, y los usuarios pueden agregarlos al carrito y realizar compras.

### Inicio de sesion

Para iniciar sesion, ingrese un email y una contraseña válidos.

### Registro

Para registrarse, ingrese un nombre, telefono, email, direccion, edad y una contraseña válidos. 
Recuerde tambien confirmar la contraseña.

### Perfil

El perfil de usuario se encuentra en la barra de navegación. Al hacer click en el icono del perfil se abre una vista con la información del usuario. 
En la misma se puede acceder a las ordenes y/o cerrar sesión.

### Productos

Los productos estan en la vista principal del sitio. Al hacer click en un producto se abre una vista con la información del mismo. 
En la misma se puede agregar al carrito, seleccionando la cantidad necesaria, o volver a la vista principal.

### Carrito

El carrito de compras se encuentra en la barra de navegación. Al hacer click en el icono del carrito se abre una pagina con el contenido del carrito. 
Dentro de esta podemos eliminar productos o vaciar el carrito y finalizar la compra.
Al finalizar la compra se envia un mail con la orden realizada.

### Ordenes

Las ordenes se pueden acceder desde la pagina tu perfil. 
Al hacer click en el link se abre una vista con las ordenes realizadas. En caso de no haber ordenes saldra un mensaje indicando que no hay ordenes.

### Chat

Para acceder al chat se debe hacer click en el icono del chat flotante en el la punta inferior derecha. 
Al hacer click se abre una pagina con el chat para mandar mensajes y ver los mensajes que recibiste.
## Tecnologias usadas:

### Front-end

```
- React
- React Router
- React Router Dom
- Axios
- socket.io-client
```

### Back-end

```
- Node.js
- Express
- Socket.io
- Mongoose
- MongoDB
- Nodemailer
- Passport
```

### Database

```
- MongoDB
```

Creado por: L-Molina
