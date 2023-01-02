import { carritosDao } from "../persistencia/contenedores/daos/index.js";
import { ordersDao } from "../persistencia/contenedores/daos/index.js";
import { productosDao } from "../persistencia/contenedores/daos/index.js";

//getAllCarts: conseguir todos los carritos
const getAllCarts = async () => {
  const data = await carritosDao.listarTodos();
  return data;
}

//getCart: conseguir un carrito segun su id
const getCart = async (id) => {  
  const data = await carritosDao.getById(id);
  return data;
}

//saveCart: agregar un carrito nuevo
const saveCart = async (userId, username, email, direccion) => {
  const data = await carritosDao.guardar(userId, username, email, direccion);
  return data;
} 

//updateCart: cambiar un carrito segun su id
const updateCart = async (id, userId) => {
  const data = await carritosDao.changeById(id, userId);
  return data;
}

//deleteCart: borrar un carrito segun su id
const deleteCart = async (id) => {
  const data = await carritosDao.deleteById(id);
  return data;
}

//saveProdToCart: guardar un producto en el carrito
const saveProdToCart = async (idCarrito, idProducto, quantity) => {
  /* verificar si el producto se encuentra en el carrito */
  const cart = await carritosDao.getById(idCarrito);  
  const product = cart.products.find( product => product._id == idProducto );
  if (product) {    
    /* actualizar la cantidad del producto */
    const data = await carritosDao.updateProduct(idCarrito, idProducto, quantity);
    return data;
  } 
  else {
    const producto = await productosDao.listar(idProducto);
    producto.quantity = quantity;
    const data = await carritosDao.addProduct(idCarrito, producto );
    return data;
  }
}

//deleteProdFromCart: borrar un producto del carrito
const deleteProdFromCart = async (idCarrito, idProducto) => {
  const data = await carritosDao.deleteProduct(idCarrito, idProducto);
  return data;
}

//deleteAllFromCart: borrar todos los productos del carrito
const deleteAllFromCart = async (idCarrito) => {
  const data = await carritosDao.deleteAllProducts(idCarrito);
  return data;
}

//saveOrder: guardar una orden
const saveOrder = async (userId, products, email, username, direccion) => {
  const data = await ordersDao.save(userId, products, email, username, direccion);   
  return data;
}

//getAllOrders: conseguir todas las ordenes
const getAllOrders = async () => {    
  const data = await ordersDao.listarTodos();
  return data;
}

export { getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, saveOrder, getAllOrders, deleteAllFromCart }; 