import '../connection/connection.js';
import { messagesDao } from '../persistencia/contenedores/daos/index.js';

//list: mostrar todos los mensajes
const list = async () => {
  const chat = await messagesDao.list();
  return chat;
}

//save: guardar un mensaje
const save = async (mensaje) => { 
  const newMessage = await messagesDao.save(mensaje);
  return newMessage; 
}

export { list, save };