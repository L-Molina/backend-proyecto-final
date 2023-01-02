import ContenedorMemoria from "../../ContenedorMemoria.js";
import { messages } from '../../../../db/memoria.js';

class MessageDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(messages) 
  }
}

export { MessageDaoMemoria };   