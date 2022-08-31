# backend-proyecto-final

1. Forkear y clonar el repositorio

2. Parado en la raíz del proyecto correr el siguiente comando para instalar todas las dependecias del proyecto:

   ```
   npm install
   ```
   
3. Usar el siguiente comando para correr el proyecto, disponible en http://localhost:8080: 

   ```
   npm run dev
   ```

   La pagina se puede ver en http://localhost:8080/ o en el puerto que desee si declara una variable PORT en el archivo ".env" donde lo especifique.

4. Peticiones

4.1. Peticiones en PRODUCTOS
    
    - GET en '/api/productos' para ver los productos  
    - GET en '/api/productos/:id' para obtener un producto segun id
    - POST en '/api/productos/' para cargar un producto    
    - DELETE en '/api/productos/:id' para eliminar un producto segun id 
    - PUT en '/api/productos/:id' para modificar un producto segun id
    Ejemplo de producto en body:
        ```  
        {
          "name": "Fideos",
          "timestamp": 1659884104436,
          "description": "Fideos (precio por plato)",
          "code": "FID",
          "photo": "https://www.recetas-argentinas.com/base/stock/Recipe/41-image/41-image_web.jpg",
          "price": 1000,
          "stock": 20
        }
        ``` 

4.2. Peticiones en CARRITO
    
    - POST en '/api/carrito' para crear un carrito
    - DELETE en '/api/carrito/:id' para eliminar un carrito segun id   
    - GET en '/api/carrito/:id/productos' para obtener los productos de un carrito segun su id
    - POST en '/api/carrito/:id/productos/:idProducto' para cargar un producto en un carrito segun id de carrito y producto
    - DELETE en '/api/carrito/:id/productos/:idProducto' para eliminar un producto un un carrito segun el id de carrito y el id del producto

4.3 Admin

En la ruta "src/Routes/productRouter.js" hay una variable llamada "admin" que habilita agregar, actualizar o eliminar productos.

5. Base de Datos

En el archivo ".env" puede elegir el metodo para que persistan los datos. Tiene las siguientes opciones:

    - PERS=json: Para guardar los datos en archivos JSON (viene asignada por default)
    - PERS=firebase: Para guardar los datos en una Base de Datos de Firebase
    - PERS=mongodb: Para guardar datos con un MongoDb local
    - PERS=memoria: Para guardar los datos en un array