import ContenedorArchivo from "../../ContenedorArchivo.js";
const url = './src/db/orders.json'

class OrdersDaoArchivo extends ContenedorArchivo {
  constructor () {
    super(url) 
  } 

  async save(userId, products, email, username, direccion) {  
    let timestamp = new Date().getTime();
    let state = 'generado'   
    let obj = { products, userId, email, timestamp, state, username, direccion }    
    const data = await super.save(obj)
    return data      
  } 
}

export { OrdersDaoArchivo };
