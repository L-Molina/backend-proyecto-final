import express from 'express';
import router from '../Routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const methodOverride = require('method-override')
const PORT = process.env.PORT || 8080


//middleware
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router)


//conectado
const server = app.listen(PORT, () => console.log(`Servidor corriendo en port: ${server.address().port}`));

//error
server.on("error", (err) => {
  console.log(`Error del servidor: ${err}`)
});