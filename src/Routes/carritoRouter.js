const express = require("express");
const { Router } = require("express");

//declaro router
const carts = Router();

//controller
const Carts = require("../Controller/cartController");

//createNewCart
carts.post("/", (req, res) => {     
    const data = Carts.createCart()  
    res.status(201).json(data)   
});

//getCarts
carts.get("/", (req, res) => {     
    const data = Carts.getCarts()  
    res.status(201).json(data)   
});

//getCartProductById
carts.get("/:id/productos", (req, res) => {  
    let id = req.params.id    
    let data = Carts.getCartProductById(id)   
    res.status(201).json(data.products)
});

//addProductToCart
carts.post("/:id/productos/:idProducto", (req, res) => { 
    let idCarrito = req.params.id   
    let idProducto = req.params.idProducto  
    
    const data = Carts.addProductToCart(idCarrito, idProducto)
    res.status(201).json(data)   
});

//deleteElementFromCart
carts.delete("/:id/productos/:idProducto", (req, res) => { 
    let idCarrito = req.params.id   
    let idProducto = req.params.idProducto   
    
    const data = Carts.deleteElementFromCart(idCarrito, idProducto)
    res.json(data)   
});


//deleteCart
carts.delete("/:id", (req, res) => {   
    let id = req.params.id  
    const data = Controller.deleteCart(id)  
    res.json(data) 
});

module.exports = carts;