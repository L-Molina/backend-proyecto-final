import ContenedorArchivo from '../../ContenedorArchivo.js';
const url = './src/db/carts.json'

class CarritosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super(url);
  }

  //guardar carrito
  async guardar(userId, username, email, direccion) {
    let obj = { userId, username, email, direccion, products: [] }
    const data = super.guardar(obj)
    return data
  }

  //agregar producto al carrito
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

  //borrar producto del carrito
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

export { CarritosDaoArchivo }