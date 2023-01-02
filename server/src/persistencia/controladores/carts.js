import { getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, saveOrder, getAllOrders, deleteAllFromCart } from '../../servicios/carts.js';

//importo la funcion para enviar mail
import { newPurchase, notification } from '../../middleware/nodemailer.js';

//carts

//getCarts
const getCarts = async (req, res) => {
  try{
    const carts = await getAllCarts();    
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//getCartById
const getCartById = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await getCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//postCart
const postCart = async (req, res) => {
  try{
    let { userId, username, email, direccion } = req.body;    
    const cart = await saveCart(userId, username, email, direccion);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//putCart
const putCart = async (req, res) => {
  try{
    const { id } = req.params;
    let userId = req.body.userId
    const cart = await updateCart(id, userId);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//dltCart
const dltCart = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await deleteCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//postProdToCart
const postProdToCart = async (req, res) => {
  try{
    const { id, idProd } = req.params;   
    const quantity = req.body.quantity;     
    const cart = await saveProdToCart(id, idProd, quantity);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//dltProdFromCart
const dltProdFromCart = async (req, res) => {
  try{
    const { id, idProd } = req.params; 
    const cart = await deleteProdFromCart(id, idProd);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//dltAllFromCart
const dltAllFromCart = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await deleteAllFromCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//orders

//postOrder
const postOrder = async (req, res) => {
  try{
    const { userId, products, email, username, direccion } = req.body;        
    const order = await saveOrder(userId, products, email, username, direccion);
    //envio mails de compra
    newPurchase(order);    
    notification(order);
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

//getOrders
const getOrders = async (req, res) => {
  try{
    const orders = await getAllOrders();
    res.status(200).send(orders);
  } catch (error) {    
    res.status(500).send({error: error.message});
  }
};

export { postProdToCart, dltProdFromCart };
export { getCarts, getCartById, postCart, putCart, dltCart, dltAllFromCart, postOrder, getOrders };