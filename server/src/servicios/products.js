import { productosDao } from "../persistencia/contenedores/daos/index.js";

//getAllProducts: mostrar todos los productos
const getAllProducts = async () => {
  console.log("servicio")
  const products = await productosDao.listarTodos();
  return products;
}

//getProductByCategory: mostrar un producto segun su categoria
const getProductByCategory = async (id) => {
  const products = await productosDao.getByCategory(id);
  return products;
}

//getProduct: mostrar un producto segun su id
const getProduct = async (id) => {
  const product = await productosDao.listar(id);
  return product;
}

//saveProduct: guardar un producto
const saveProduct = async (product) => {
  const newProduct = await productosDao.guardar(product);
  return newProduct;
}

//deleteProduct: borrar un producto segun su id
const deleteProduct = async (id) => {
  const product = await productosDao.deleteById(id);
  return product;
}

//updateProduct: cambiar un producto segun su id
const updateProduct = async (id, product) => {
  const newProduct = await productosDao.changeById(id, product);  
  return newProduct;
}

export { getAllProducts, getProduct, saveProduct, deleteProduct, updateProduct, getProductByCategory };