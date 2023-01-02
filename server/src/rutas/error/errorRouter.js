import { Router } from "express";
import { getError, postError, deleteError, putError } from "../../persistencia/controladores/error.js";

//declaro router
const error = Router();

error.get("*", getError);

error.post("*", postError);

error.delete("*", deleteError);

error.put("*", putError);

export default error;