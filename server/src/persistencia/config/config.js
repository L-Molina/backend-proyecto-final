import dotenv from 'dotenv';
dotenv.config();

let config={
  url: "http://localhost:3000",
  database: process.env.PERS || 'json',
  databaseUrl: process.env.MONGO_URL || 'mongodb+srv://elm0:Manny589@cluster0.7rksrpc.mongodb.net/test',
  mail: 'lautarogabrielmolina@gmail.com',
  port: 8080,
  time: 600000,
}

export default config;

