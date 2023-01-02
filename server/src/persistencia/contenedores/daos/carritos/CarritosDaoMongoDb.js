import ContenedorMongoDb from '../../ContenedorMongoDb.js';
import { Cart } from "../../models/Cart.js";

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(Cart);
  }

  //guardar
  async guardar(userId) {
    let obj = {userId, username, email, direccion, products: []}
    const data = await super.save(obj)
    return data
  }

  //agregar producto
  async addProduct(idCart, product) {     
    try {  
      const arr = await super.listarTodos()    
      let indexCart = arr.findIndex(el => el._id == idCart) 
      arr[indexCart].products.push(product)       
      const data = await super.changeById(idCart, arr[indexCart])
      return data                        
    } catch (err) {      
      throw new Error('Error de escritura', err)
    }  
  }

  //borrar producto segun su id
  async deleteProduct(idCart, idProduct) {
    try {
      const arr = await super.listarTodos()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})} 
      let indexCart = arr.findIndex(el => el._id == idCart) 
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }              
      let indexProduct = arr[indexCart].products.findIndex(el => el._id == idProduct) 
      if (indexProduct == -1) {
        return ({ error: 'Producto no encontrado' })
      }   
      arr[indexCart].products.splice(indexProduct, 1)   
      await super.changeById(idCart, arr[indexCart])
      return "Producto Eliminado"
    } catch (err) {
      throw new Error('Error de escritura', err)
    }
  }
  
  //cambiar producto segun su id
  async updateProduct(idCart, idProduct, quantity) {
    try {
      const arr = await super.listarTodos()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})}

      let indexCart = arr.findIndex(el => el._id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }

      let indexProduct = arr[indexCart].products.findIndex(el => el._id == idProduct)
      if (indexProduct == -1) {
        return ({ error: 'Producto no encontrado' })
      }
      arr[indexCart].products[indexProduct].quantity += quantity
      await super.changeById(idCart, arr[indexCart])
      return "Producto Actualizado"
    }
    catch (err) {
      throw new Error('Error de escritura', err)
    }
  }

  //borrar todos los productos
  async deleteAllProducts(idCart) {
    try {
      const arr = await super.listarTodos()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})} 
      let indexCart = arr.findIndex(el => el._id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }         
      arr[indexCart].products = []   
      await super.changeById(idCart, arr[indexCart])
      return "Productos Eliminados"
    } catch (err) {
      throw new Error('Error de escritura', err)
    }
  }
}

export { CarritosDaoMongoDb }