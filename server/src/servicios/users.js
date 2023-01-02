import { usersDao } from '../persistencia/contenedores/daos/index.js';

//getAll: mostrar a todos los usuarios
const getAll = async () => {
  const users = await usersDao.list();
  return users;
};

//getUser: mostrar a un usuario segun su id
const getUser = async (id) => {
  const user = await usersDao.getById(id);
  return user;
};

//save: guardar un usuario nuevo
const save = async (user) => {
  const newUser = await usersDao.save(user);
  return newUser;
};

//deleteById: borrar un usuario segun su id
const deleteById = async (id) => {
  const user = await usersDao.deleteById(id);
  return user;
};

export { getUser, getAll, save, deleteById };