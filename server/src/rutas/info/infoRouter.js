import { Router } from "express";
import { getAllInfo } from "../../persistencia/controladores/info.js";

const info = Router();

info.get("/", getAllInfo);

export default info;