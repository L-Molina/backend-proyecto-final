import ContenedorArchivo from "../../ContenedorArchivo.js";
const url = './src/db/products.json'

class ProductosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super(url);
  }

  async getByCategory(id) {
    const arr = await super.listarTodos()
    if (arr.length === 0) {return ({"Error" : "No hay Productos"})} 
    /* filtramos por categoria */    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].category);
    }
    let arrFilter = await arr.filter(el => el.category == id)
    if (arrFilter.length === 0) {return ({"Error" : "No hay Productos para esa categoria"})}
    return arrFilter    
  }
}

export { ProductosDaoArchivo }