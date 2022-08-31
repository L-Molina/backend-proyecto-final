import { productosDao as productosApi } from "../daos/index.js";
import express from "express";
const { Router } = express;
const admin = true;

//declaro router
const products = Router();

//getProducts
products.get("/", (req, res) => {
    const productos = productosApi.listarTodos();
    res.json(productos);
}); 

//getProductById
products.get("/:id", (req, res) => {  
    const {id} = req.params;
    const producto = productosApi.listar(id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({error: "Producto no encontrado"});
    }
});

//addProducts
products.post("/", (req, res) => { 
    res.send(admin ? productosApi.guardar(req.body) : {error: -1, description: 'método POST en ruta /productos solo disponible para administradores'});
});

//updateProducts
products.put("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(admin ? productosApi.actualizar(body) : {error: -2, description: 'método PUT en ruta /productos solo disponible para administradores'});
});

//deleteProducts
products.delete("/:id", (req, res) => { 
    res.send(admin ? productosApi.borrar(req.params.id) : {error: -3, description: 'método DELETE en ruta /productos solo disponible para administradores'});
});

module.exports = products;