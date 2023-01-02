import ContenedorArchivo from "../../ContenedorArchivo.js";
const url = './src/db/messages.json'

class MessageDaoArchivo extends ContenedorArchivo {
  constructor () {
    super(url) 
  }
}

export  { MessageDaoArchivo };    