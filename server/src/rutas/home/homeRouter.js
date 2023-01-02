import { Router } from 'express';
import auth from '../../middleware/auth.js';
import { getHome, getConfig } from '../../persistencia/controladores/home.js';
const home = Router();

home.get("/", auth, getHome); 
home.get("/api/config", auth, getConfig); 

export default home;