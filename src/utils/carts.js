const productos = require("./products");

const carts = [
  {
    "id": "1",
    "timestamp": 1659885378028,
    "products": [
      {
          "name": "Fideos",
          "timestamp": 1659884104436,
          "description": "Fideos (precio por plato)",
          "code": "FID",
          "photo": "https://www.recetas-argentinas.com/base/stock/Recipe/41-image/41-image_web.jpg",
          "price": 1000,
          "stock": 20,
          "id": 1
      },
      {
          "name": "Hamburguesa",
          "timestamp": 1659884104437,
          "description": "Una hamburguesa (guarnicion por separado)",
          "code": "HAM",
          "photo": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/04/recetas-de-hamburguesas-caseras-de-carne-molida.jpg",
          "price": 1800,
          "stock": 30,
          "id": 2
      },
      {
          "name": "Milanesas con Papas",
          "timestamp": 1659884104438,
          "description": "Milanesas con Papas",
          "code": "MIL",
          "photo": "https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg",
          "price": 1000,
          "stock": 40,
          "id": 3
      }
    ]
  },
  {
    "id": "2",
    "timestamp": 1659885378018,
    "products": [
      {
          "name": "Milanesas con Papas",
          "timestamp": 1659884104438,
          "description": "Milanesas con Papas",
          "code": "MIL",
          "photo": "https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg",
          "price": 1000,
          "stock": 40,
          "id": 3
      }
    ]
  }
];
let id = 0;

//createNewCart
const createNewCart = () => {
  id++ 
  let timestamp = new Date().getTime();
  carts.push({id : id, timestamp: timestamp , products : []}) 
  return id
} 

//getAllCarts
const getAllCarts = () => {
  return carts;
} 

//getCart
const getCart = (x) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 
  return (carts.find(el => el.id == x) || { error: 'Carrito no encontrado' })  
}  

//deleteCart
const deleteCart = (i) => {    
  let index = carts.findIndex(x => x.id == i) 
  if (index == -1) {
    return ({ error: 'Carrito no encontrado' })
  }  
  carts.splice(index, 1);
  return "Carrito Eliminado"  
}

//addToCart
const addToCart = (idCarrito, idProducto) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 

  let indexCart = carts.findIndex(el => el.id == idCarrito)
  if (indexCart == -1) {
    return ({ error: 'Carrito no encontrado' })
  } 

  const products = productos.list()
  let indexProduct = products.findIndex(el => el.id == idProducto)
  if (indexProduct == -1) {
    return ({ error: 'Producto no encontrado' })
  } 

  carts[indexCart].products.push(products[indexProduct])
  return "Producto Agregado"
   
}  

//deleteFromCart
const deleteFromCart = (idCarrito, idProducto) => {    
  if (carts.length === 0) {return ({"Error" : "No hay Carritos"})} 

  let indexCart = carts.findIndex(el => el.id == idCarrito)
  if (indexCart == -1) {
    return ({ error: 'Carrito no encontrado' })
  } 

  const productos = carts[indexCart].products;
  let indexProduct = productos.findIndex(el => el.id == idProducto)
  if (indexProduct == -1) {
    return ({ error: 'Producto no encontrado' })
  } 

  carts[indexCart].products.splice(indexProduct, 1);  
  return "Producto Eliminado"
   
}  


module.exports = { createNewCart, getAllCarts, getCart, deleteCart, addToCart, deleteFromCart };