import config from '../../config/config.js'

let usersDao;
let productosDao;
let messagesDao;
let carritosDao;
let ordersDao;

const PERS = config.database;

/* import dotenv from 'dotenv';
dotenv.config(); */

switch (PERS) {
  case 'json':
		const ProductosDaoArchivo = await (async () => {let {ProductosDaoArchivo} = await import('./productos/ProductosDaoArchivo.js'); return ProductosDaoArchivo})();
		const CarritosDaoArchivo = await (async () => {let {CarritosDaoArchivo} = await import('./carritos/CarritosDaoArchivo.js'); return CarritosDaoArchivo})();
		const MessageDaoArchivo = await (async () => {let {MessageDaoArchivo} = await import('./message/MessageDaoArchivo.js'); return MessageDaoArchivo})();
    const UsersDaoArchivo = await (async () => {let {UsersDaoArchivo} = await import('./usuarios/UsersDaoArchivo.js'); return UsersDaoArchivo})();
    const OrdersDaoArchivo = await (async () => {let {OrdersDaoArchivo} = await import('./orders/OrdersDaoArchivo.js'); return OrdersDaoArchivo})();
    productosDao = new ProductosDaoArchivo();
		carritosDao = new CarritosDaoArchivo();
    messagesDao = new MessageDaoArchivo();
    usersDao = new UsersDaoArchivo();
    ordersDao = new OrdersDaoArchivo();
		break;
  case 'mongodb':
    const ProductosDaoMongoDb = await (async () => {let {ProductosDaoMongoDb} = await import('./productos/ProductosDaoMongoDb.js'); return ProductosDaoMongoDb})();
		const CarritosDaoMongoDb = await (async () => {let {CarritosDaoMongoDb} = await import('./carritos/CarritosDaoMongoDb.js'); return CarritosDaoMongoDb})();
		const MessageDaoMongoDb = await (async () => {let {MessageDaoMongoDb} = await import('./message/MessageDaoMongoDb.js'); return MessageDaoMongoDb})();
    const UsersDaoMongoDb = await (async () => {let {UsersDaoMongoDb} = await import('./usuarios/UsersDaoMongoDb.js'); return UsersDaoMongoDb})();
    const OrdersDaoMongoDb = await (async () => {let {OrdersDaoMongoDb} = await import('./orders/OrdersDaoMongoDb.js'); return OrdersDaoMongoDb})();
    productosDao = new ProductosDaoMongoDb();
		carritosDao = new CarritosDaoMongoDb();
    messagesDao = new MessageDaoMongoDb();
    usersDao = new UsersDaoMongoDb();
    ordersDao = new OrdersDaoMongoDb();
    break;
  case 'memoria':
    const ProductosDaoMemoria = await (async () => {let {ProductosDaoMemoria} = await import('./productos/ProductosDaoMemoria.js'); return ProductosDaoMemoria})();
		const CarritosDaoMemoria = await (async () => {let {CarritosDaoMemoria} = await import('./carritos/CarritosDaoMemoria.js'); return CarritosDaoMemoria})();
		const MessageDaoMemoria = await (async () => {let {MessageDaoMemoria} = await import('./message/MessageDaoMemoria.js'); return MessageDaoMemoria})();
    const UsersDaoMemoria = await (async () => {let {UsersDaoMemoria} = await import('./usuarios/UsersDaoMemoria.js'); return UsersDaoMemoria})();
    const OrdersDaoMemoria = await (async () => {let {OrdersDaoMemoria} = await import('./orders/OrdersDaoMemoria.js'); return OrdersDaoMemoria})();
    productosDao = new ProductosDaoMemoria();
		carritosDao = new CarritosDaoMemoria();
    messagesDao = new MessageDaoMemoria();
    usersDao = new UsersDaoMemoria();
    ordersDao = new OrdersDaoMemoria();
    break;
}

export { usersDao, productosDao, messagesDao, carritosDao, ordersDao };