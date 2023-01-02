import { save } from '../../servicios/users.js';
import { saveCart } from '../../servicios/carts.js';

//logger
import { sendInfoLog } from '../../logs/logger.js';

//funcion para enviar mails
import { sendMail } from '../../middleware/nodemailer.js';

const postRegister = async (req, res) => {
  sendInfoLog(req);
  const file = req.file;
  const image = file.filename;
  const { username, edad, telefono, direccion, password, email } = req.body
  try {
    const user = await save({ username, edad, telefono, direccion, password, email, image });
    if (!user) {
      res.status(400).send({message: 'El usuario ya existe'});
      console.log("banana")
    } else {
      /* VERIFICAR */
      let userId = user._id;
      sendMail(user);
      const cart = await saveCart(userId, username, email, direccion);      
      res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error al registrar el usuario'});
  }  
}

export { postRegister };