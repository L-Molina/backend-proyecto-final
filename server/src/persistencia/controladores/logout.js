import { getUser } from '../../servicios/users.js';

//import logger
import { sendInfoLog } from '../../logs/logger.js';

const getLogout = async (req, res) => {
  try {
    const datosUsuario = await getUser(req.user._id); 
    if (datosUsuario) {
      const user = datosUsuario.username;
      sendInfoLog(req);
      req.session.destroy((err) => { 
        if (!err) { 
          res.status(200).send({message: `Logout exitoso, ${user}`});    
        }    
        else { 
          res.status(400).send({error: 'No se pudo cerrar la sesion'});  
        }
      });      
    }
  } catch (error) {
    sendInfoLog(req);
    res.status(400).send({error: 'No se pudo cerrar la sesion'});
  }
}

export { getLogout };