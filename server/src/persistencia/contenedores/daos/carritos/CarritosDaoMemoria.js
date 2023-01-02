import ContenedorMemoria from '../../ContenedorMemoria.js';
import { carritos } from '../../../../db/memoria.js';

class CarritosDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(carritos)
  }

  //guardar
  async guardar() {
    let obj = {products: []}  
    super.save(obj)     
  }

  //agregar un producto
  async addProduct(idCart, idProduct) {
    try {
      const productData = await fetch (`/api/productos/${idProduct}`) 
      const product = await productData.json()
      if (product.error) { 
        return ({ error: 'Producto no encontrado' })
      }
      const arr = await super.listarTodos()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})}
      let indexCart = arr.findIndex(el => el.id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }
      arr[indexCart].products.push(product)
      await super.changeById(idCart, arr[indexCart])
      return "Producto Agregado"     
    } catch (err) {
      throw new Error('Error de escritura', err)
    }
  }

  //borrar un producto
  async deleteProduct(idCart, idProduct) {
    try {
      const arr = await super.listarTodos()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})} 
      let indexCart = arr.findIndex(el => el.id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }   
      let indexProduct = arr[indexCart].products.findIndex(el => el.id == idProduct)
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

  //actualizar un producto
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
    } 
    catch (err) {
      throw new Error('Error de escritura', err)
    }
  }
}

export { CarritosDaoMemoria };