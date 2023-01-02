import ContenedorMongoDb from "../../ContenedorMongoDb.js";
import { Order } from "../../models/Order.js"; 

class OrdersDaoMongoDb extends ContenedorMongoDb {
  constructor () {
    super(Order) 
  } 

  async save(userId, products, email, username, direccion) {  
    let timestamp = new Date().getTime();
    let state = 'generado'   
    let obj = { products, userId, email, timestamp, state, username, direccion }    
    const data = await super.save(obj)
    return data      
  } 
}

export { OrdersDaoMongoDb };