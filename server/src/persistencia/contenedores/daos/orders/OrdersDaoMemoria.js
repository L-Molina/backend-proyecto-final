import ContenedorMemoria from "../../ContenedorMemoria.js";
import { orders } from '../../../../db/memoria.js';

class OrdersDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(orders) 
  } 

	//guardar una orden
  async saveOrder(userId, products, email, username, direccion) {  
    let timestamp = new Date().getTime();
    let state = 'generado'   
    let obj = { products, userId, email, timestamp, state, username, direccion }    
    const data = await super.save(obj)
    return data      
  } 
}

export { OrdersDaoMemoria };