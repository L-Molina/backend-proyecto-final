import { Router } from "express";
import { postLogin } from "../../persistencia/controladores/login.js";
import { getLogError } from "../../persistencia/controladores/logError.js";
import { postRegister } from "../../persistencia/controladores/register.js";
import { getLogout } from "../../persistencia/controladores/logout.js";

//importo la funcion para subir archivos
import upload from '../../middleware/multer.js';

const auth = Router();

import passport from "../../middleware/passport.js";

auth.post("/login", passport.authenticate("local", { failureRedirect: "/auth/login-error" }), postLogin);

auth.get("/login-error", getLogError);

auth.get("/logout", getLogout);

auth.post("/register", upload.single("myFile"), postRegister);

export default auth;