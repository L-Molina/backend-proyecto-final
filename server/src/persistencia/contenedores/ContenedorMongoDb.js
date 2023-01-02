/* import mongo conection */
import '../../connection/connection.js';   

class ContenedorMongoDb {
  constructor(schema) {
    this.schema = schema;    
  }

  //listar segun id
  async listar(idEl) {
    try {
      const el = await this.schema.findOne({ _id: idEl })     
      return el;
    } catch (err) {
      return({error: 'elemento no encontrado'});
    }
  }

  //listarTodos
  async listarTodos() {
    try {
      const arr = await this.schema.find({});  
      return arr;
    } catch (error) {
      console.log(error);
    }
  }

  //guardar
  async guardar(obj) {
    try { 
      let timestamp = new Date().getTime(); 
      obj.timestamp = timestamp    
      const newObj = new this.schema(obj);
      const data = await newObj.save();  
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //actualizar segun id
  async actualizar(idEl, obj) {
    try {
      let timestamp = new Date().getTime();
      obj.timestamp = timestamp  
      const el = await this.schema.findByIdAndUpdate(idEl, obj)      
      return ('elemento actualizado') 
    } catch (error) {
      console.log(error);
    }
  }

  //borrar segun id
  async borrar(idEl) {
    try {      
      const data = await this.schema.findByIdAndDelete(idEl)       
      return ('elemento eliminado')
    } catch (error) {
      console.log(error);
    }
  }
}

export default ContenedorMongoDb;