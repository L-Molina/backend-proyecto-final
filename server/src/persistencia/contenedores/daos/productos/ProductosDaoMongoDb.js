import ContenedorMongoDb from '../../ContenedorMongoDb.js';
import { Product } from "../../models/Product.js"; 

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor () {
    super(Product) 
  }

  async getByCategory(id) {
    const arr = await super.list()    
    if (arr.length === 0) {return ({"Error" : "No hay Productos"})} 
    /* filtramos por categoria */    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].category);
    }
    let arrFilter = await arr.filter(el => el.category == id)
    if (arrFilter.length === 0) {return ({"Error" : "No hay Productos con esa categoria"})}
    return arrFilter;
  }
}

export { ProductosDaoMongoDb }