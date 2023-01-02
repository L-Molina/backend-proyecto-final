import ContenedorArchivo from "../../ContenedorArchivo.js";
import bcrypt from "bcrypt";

const url = './src/db/users.json'

class UsersDaoArchivo extends ContenedorArchivo {
  constructor() {
    super(url);
  }

  async save(obj) {
    try {
      /* verificamos si existe un usuario con el mismo mail */
      const users = await this.listarTodos();
      const userExist = users.find(user => user.email === obj.email); 
      if (userExist) { //si el usuario existe
        return false; 
      } else { 
        const hashPass = await bcrypt.hash(obj.password, 8) //hasheo la contraseña 
        obj.password = hashPass; //guardo la contraseña encriptada
        const data = await super.guardar(obj); //guardo el usuario en la db        
        return data;
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail (email) {
    try {
      const users = await this.listarTodos();
      const userExist = users.find(user => user.email === email); //busco si el usuario ya existe en la db
      if (userExist) { 
        return userExist; 
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export {UsersDaoArchivo};