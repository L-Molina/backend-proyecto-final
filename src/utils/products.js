const data = [];
let id = 0;

//getAllProducts
const getAllProducts = () => {
  return data;
}  

//addProduct
const addProduct = (object) => {
  id ++ 
  let timestamp = new Date().getTime();     
  object.id = id 
  object.timestamp = timestamp 
  data.push(object) 
  return object
}  

//getProduct
const getProduct = (x) => {    
  if (data.length === 0) {return ({"Error" : "Archivo Vacio"})} 
  return (data.find(el => el.id == x) || { error: 'Producto no encontrado' })  
}  

//deleteProduct
 const deleteProduct = (i) => {    
  let index = data.findIndex(x => x.id == i) 
  if (index == -1) {
    return ({ error: 'Producto no encontradooooo' })
  }  
  data.splice(index, 1);
  return "Producto Eliminado"  
} 

//updateProduct
 const updateProduct = (i, object) => { 
  let index = data.findIndex(x => x.id == i)
  if (index == -1) {
    return ({ error: 'Producto no encontrado' })
  }  
  object.id = i 
  object.timestamp = data[index].timestamp
  data[index] = object  
  return "Producto Reemplazado"
} 

module.exports = { getAllProducts, addProduct, getProduct, deleteProduct, updateProduct};