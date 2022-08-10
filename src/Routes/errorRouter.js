const express = require("express");
const { Router } = require("express");

//declaro router
const error = Router();

//get
error.get("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

//post
error.post("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

//delete
error.delete("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

//put
error.put("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

module.exports = error;