import * as fs from 'fs'

//list: leer el archivo
const list = async (ruta) => {
  try {      
    const data = await fs.readFileSync(ruta, 'utf-8')
    const dataObj = JSON.parse(data) 
    return (dataObj)
  } catch (err) {      
    throw new Error('No se pudo leer archivo', err)
  }
}

//save: agregar un producto
const save = async (product, ruta) => {
  try {  
    let timestamp = new Date().getTime();            
    const arr = await list(ruta)      
    let id = arr.length > 0 ? arr.length + 1 : 1      
    product._id = id
    product.timestamp = timestamp 
    arr.push(product)
    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2)) 
    return(product)
  }
  catch (err) {      
    throw new Error('Error de escritura', err)
  } 
} 

//getById: obtener un producto segun id
const getById = async (x, ruta) => {     
  try {             
    const arr = await list(ruta)    
    if (arr.length === 0) {return "Archivo Vacio"} 
    return (arr.find(el => el._id == x) || { error: 'Producto no encontrado (getById)' })
  } catch (err) {  
    throw new Error('Error de Lectura', err)
  }
}

//deleteById: borrar un producto segun id
const deleteById = async (i, ruta) => {  
  try {
    const arr = await list(ruta)    
    let index = arr.findIndex(x => x.id == i) 
    if (index == -1) {
      return ({ error: 'Producto no encontrado' })
    }  
    const newArr = arr.filter(el => el.id != i)    
    fs.writeFileSync(ruta, JSON.stringify(newArr, null, 2))    
    return "Producto Eliminado" 
  } 
  catch (err) {    
    throw new Error('Error de escritura', err)
  }  
}

//changeById: cambiar un producto segun id
const changeById = async (i, object, ruta) => {
  try {
    const arr = await list(ruta) 
    let index = arr.findIndex(x => x.id == i)
    if (index == -1) {
      return ({ error: 'Producto no encontrado' })
    } 
    object.id = i
    object.timestamp = arr[index].timestamp    
    const editedProduct = {...arr[index], ...object}    
    arr[index] = editedProduct
    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2)) 
    return "Producto Reemplazado"
  }
  catch (err) {    
    throw new Error('Error de escritura', err)
  } 
} 

export { list, save, getById, deleteById, changeById }