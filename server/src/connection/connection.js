import config from '../persistencia/config/config.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
  //conexion a la base de datos
  const URL = config.databaseUrl
  mongoose.connect(URL);
  console.log('Base de datos conectada');
} catch (err) {
  console.log(err)
}