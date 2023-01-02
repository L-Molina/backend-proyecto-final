//logger
import { sendWarnLog } from '../../logs/logger.js';

//getError
const getError = (req, res) => {   
  sendWarnLog(req);
  res.status(200).send({
    error: "404 - No se encontro la pagina que buscas",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada "
  });  
}

//postError
const postError = (req, res) => {
  sendWarnLog(req);
  res.status(200).send({
    error: "404 - No se encontro la pagina que buscas",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

//deleteError
const deleteError = (req, res) => {
  sendWarnLog(req);
  res.status(200).send({
    error: "404 - No se encontro la pagina que buscas",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

//putError
const putError = (req, res) => {
  sendWarnLog(req);
  res.status(200).send({
    error: "404 - No se encontro la pagina que buscas",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

export { getError, postError, deleteError, putError };