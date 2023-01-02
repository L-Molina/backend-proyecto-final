import ContenedorMemoria from "../../ContenedorMemoria.js";
import { users } from '../../../../db/memoria.js';
import bcrypt from "bcrypt";

class UsersDaoMemoria extends ContenedorMemoria {
  constructor() {
    super(users);
  }

	//guardar usuario
  async saveUser(obj) { 
    try {
      /* verificamos si existe un usuario con elmismo mail */
      const users = await this.list();
      const userExist = users.find(user => user.email === obj.email); 
      if (userExist) { 
        return false; 
      } else {
        const hashPass = await bcrypt.hash(obj.password, 8) //hasheo la contraseña
        obj.password = hashPass; //guardo la contraseña encriptada
        const data = await super.save(obj); //guardo el usuario en la db  
        console.log(users);          
        return data;
      }      
    } catch (error) {
      console.log(error);
    }
  }

	//encontrar un usuario segun su mail
  async findByEmail (email) {
    try {
      const users = await this.list();
      const userExist = users.find(user => user.email === email); 
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

export { UsersDaoMemoria };