import { Router } from 'express';
import { postOrder, getOrders } from "../../persistencia/controladores/carts.js"; 

const orders = Router();

orders.post("/", postOrder);

orders.get("/", getOrders);

export default orders;