import { getInfo } from '../../servicios/info.js';

//logger
import { sendInfoLog } from '../../logs/logger.js';

//getAllInfo
const getAllInfo = (req, res) => {  
  sendInfoLog(req);
  const data = getInfo();
  res.status(200).send(data);   
}

export { getAllInfo }