import { Router } from 'express';
import { getUsuario } from "../../persistencia/controladores/user.js";

//router
const user = Router();

user.get("/", getUsuario);

export default user;