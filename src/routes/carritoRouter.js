import express from "express";
const { Router } = express;
import { carritosDao as carritosApi } from "../daos/index.js";

//declaro router
const carts = Router();

//createNewCart
carts.post("/", (req, res) => {     
    const prods = req.body;
    res.send(carritosApi.guardar(prods));
});

//getCarts
carts.get("/", (req, res) => {     
    const {id} = req.params;
    const carrito = carritosApi.listar(id);
    if (carrito) {
        res.json(carrito);
    } else {
        res.status(404).json({error: "Carrito no encontrado"});
    }
});

//addProductToCart
carts.post("/:id/productos/:idProducto", (req, res) => { 
    const {id} = req.params;
    const producto = productosApi.listar(req.body.id);
    if (producto && {id}) {
        res.send(carritosApi.listar(id).productos.push(producto));
    } else {
        res.status(404).json({error: "Producto o carrito no encontrado"});
    }
});

//deleteElementFromCart
carts.delete("/:id/productos/:idProducto", (req, res) => { 
    const {id, id_prod} = req.params;
    res.send(carritosApi.listar(id).productos.splice(( id_prod - 1 ), 1));   
});

//deleteCart
carts.delete("/:id", (req, res) => {   
    res.send(carritosApi.borrar(req.params.id));
});

module.exports = carts;