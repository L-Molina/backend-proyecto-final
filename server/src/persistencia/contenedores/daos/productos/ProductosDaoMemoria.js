import ContenedorMemoria from "../../ContenedorMemoria.js";
import { products } from '../../../../db/memoria.js';

class ProductosDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(products)
  }

  //obtener un producto segun su categoria
  async getByCategory(id) {
    const arr = await super.list()
    if (arr.length === 0) {return ({"Error" : "No hay Productos"})} 
    /* filtramos por categoria */    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].category);
    }
    let arrFilter = await arr.filter(el => el.category == id) 
    if (arrFilter.length === 0) {return ({"Error" : "No hay Productos para esa categoria"})}
    return arrFilter;    
  }
}

export { ProductosDaoMemoria };