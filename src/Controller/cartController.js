const carritos = require("../utils/carts");

//Declaro el controller 
class Carts { 
    static createCart() {
        const newCartId = carritos.createNewCart()
        return newCartId
    }

    static addProductToCart(x, y) {
        const data = carritos.addToCart(x, y);
        return data
    }
  
    static getCarts() {    
        const data = carritos.getAllCarts();
        return data;
    }  
  
    static getCartProductById(x) {    
        const data = carritos.getCart(x);
        return data;
    }  
  
    static deleteById(x) {
        const data = carritos.deleteCart(x);
        return data;
    } 

    static deleteElementFromCart(x, y) {
        const data = carritos.deleteFromCart(x, y);
        return data;
    }
} 

module.exports = Carts;