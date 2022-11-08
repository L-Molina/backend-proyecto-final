# backend-proyecto-final

1. Forkear y clonar el repositorio

2. Parado en la raíz del proyecto correr el siguiente comando para instalar todas las dependecias del proyecto:

   ```
   npm install
   ```
   
3. Crear las siguientes variables de entorno:
   
   PERS=mongodb
   MONGO_URL= mongo Atlas URL
   ACCOUNTSID= Twilio Account SID
   AUTHTOKEN= Twilio Auth Token
   TWILIONUMBER= Twilio Number
   EMAIL= email donde recibir los mensajes
   MAILPASS= gmail pasword para app

4. Usá el siguiente comando para correr el proyecto, que estará disponible en http://localhost:8080

   ```
   npm node app.js
   ```

La Aplicación está desplegada en Heroku y puede ser accedida desde 
Es un e-commerce de varios tipos de productos (principalmente comidas), donde se puede iniciar sesion creando tu propio usuario
Ademas el administrador puede crear, editar y eliminar productos, y los usuarios pueden agregarlos al carrito y realizar compras