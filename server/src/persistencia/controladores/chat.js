import '../../connection/connection.js'; 
import { list, save } from '../../servicios/chat.js';

//getChat
const getChat = async () => {
  const messages = await list();  
  return messages
}

//sendMessage
const sendMessage = async (data) => {  
  const newMessage = await save(data);
  return newMessage;
}

export { getChat, sendMessage };