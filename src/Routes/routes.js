const express = require("express");
const { Router } = express;
const router = Router();

//import routers
const products = require("./productRouter");
const error = require("./errorRouter");
const carts = require("./carritoRouter");

//middlewares
router.use("/api/productos", products);
router.use("/api/carrito", carts);
router.use("*", error);

module.exports = router;