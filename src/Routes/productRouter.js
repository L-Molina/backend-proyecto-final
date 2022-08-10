const express = require("express");
const { Router } = require("express");

//declaro router
const products = Router();

//controller
const Products = require("../Controller/productController");

//getProducts
products.get("/", (req, res) => {
    const productos = Products.getProducts()
    res.status(200).json(productos);
}); 

//getProductById
products.get("/:id", (req, res) => {  
    let id = req.params.id    
    let data = Products.getProductById(id)   
    res.status(201).json(data)
});

//addProducts
products.post("/", (req, res) => { 
    let login = Products.isAdminLogin()
    if (login) {
        const {name, description, code, thumbnail, price, stock} = req.body
        const data = Products.addProducts({name, description, code, thumbnail, price, stock})  
        res.status(201).json(data) 
    } else {
        res.json({ error : -1, descripcion: "ruta '/' método 'POST' no autorizado" })
    }
});

//deleteProducts
products.delete("/:id", (req, res) => { 
    let login = Products.isAdminLogin()
    if (login) {
        let id = req.params.id  
        const data = Products.deleteProducts(id)  
        res.json(data) 
    } else {
        res.json({ error : -1, descripcion: `ruta '/${id}' método 'DELETE' no autorizado` })
    }
});

//updateProducts
products.put("/:id", (req, res) => {
    let login = Products.isAdminLogin()
    if (login) {
        let id = parseInt(req.params.id)
        const {name, description, code, thumbnail, price, stock} = req.body
        const data = Products.updateProducts(id, {name, description, code, thumbnail, price, stock})  
        res.json(data) 
    } else {
        res.json({ error : -1, descripcion: `ruta '/${id}' método 'PUT' no autorizado` })
    } 
});

module.exports = products;
