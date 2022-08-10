const productos = require("../utils/products");

//Declaro el controller 
class Products { 
    static getProducts() {
        const allProducts = productos.getAllProducts()
        return allProducts
    }

    static addProducts(object) {
        const idProduct = productos.addProduct(object);
        return idProduct
    }
  
    static getProductById(x) {    
        const data = productos.getProduct(x);
        return data;
    }  
  
    static deleteProducts(x) {
        const data = productos.deleteProduct(x);
        return data;
    } 

    static updateProducts(x, object) {
        const data = productos.updateProduct(x, object);
        return data;
    }
} 

module.exports = Products;