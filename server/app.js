import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './src/persistencia/config/config.js'
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//express
const app = express()

//enable cors
//cors config
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


//MongoAtlas
import MongoStore from 'connect-mongo';
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//conexion a la db para las sesiones
app.use(cookieParser('secretcode'));
let mongoUrl = config.databaseUrl;

//middleware para sesiones
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions
    }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    rolling: true, 
    cookie: { maxAge: config.time }
  })
);

//middleware para passport
app.use(passport.initialize());
app.use(passport.session());

//router
import { router } from './src/rutas/index.js';

//plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json()); //para recibir json
app.use(express.urlencoded({extended: true})); //para recibir datos de formularios
app.use('/', router)

//console.log(`NODE_ENV=${config.NODE_ENV}`);

//importar socket.io, inicializar con CORS
import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  },
});

//chat --> controllers
import { getChat, sendMessage } from './src/persistencia/controladores/chat.js';

io.on('connection', async function(socket) {
  //mensaje cuando se conecta un usuario
  console.log('Un cliente se ha conectado'); 
  //primera conexion del usuario
  const messages = await getChat();  
  socket.emit('messages', messages); 
  //escucho el/los mensajes del cliente, lo agrego a la db y le paso los mensajes a todos los clientes
  socket.on ('new-message', async function (data){    
    sendMessage(data)
    .then(async (newMessage) => {             
      const messages = await getChat();  
      io.sockets.emit('messages', messages);
    })
  });
});

//conectado
const port = config.port;
httpServer.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${port}`);
});

export default app;