//npm init -y
//npm install express
//npm install method-override

const express = require('express')
const app = express()
const methodOverride = require('method-override')

const PORT = process.env.PORT || 8080;

const router = require('./src/Routes/routes')

//middleware
app.use(methodOverride('_method'))

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)

//conectado
const server = app.listen(PORT, () => console.log(`Servidor corriendo en port: ${server.address().port}`));

//error
server.on("error", (err) => {
  console.log(`Error del servidor: ${err}`)
});
