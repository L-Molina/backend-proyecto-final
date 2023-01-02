import ContenedorMongoDB from "../../ContenedorMongoDb.js";
import { User } from "../../models/User.js"; 
import bcrypt from "bcrypt";

class UsersDaoMongoDb extends ContenedorMongoDB {
  constructor () {
    super(User) 
  }

	async guardar(obj) {
    try {
      const userExist = await User.findOne({email: obj.email}); 
      if (userExist) { 
        return false; 
      } else { 
        const hashPass = await bcrypt.hash(obj.password, 8) 
        obj.password = hashPass; 
        const data = await super.save(obj);
        console.log(data);
        return data; 
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail (email) {
    try {
      const userExist = await User.findOne  ({email: email }); //busco si el usuario ya existe en la Db
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

export { UsersDaoMongoDb }