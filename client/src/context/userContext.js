import axios from "axios";

//creamos el context
const { createContext, useState, useEffect } = require("react");
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null)

	//obtener el carrito
  const getCart = () => {
    const url = 'http://localhost:8080/carts'   
    return axios.get(url).then(response => response.data)
  }

	//obtener un carrito segun el usuario al que le pertenece
  const findCartByUser = async (id) => {
    const carts = await getCart();
    const cart = carts.find(el => el.userId === id)
    if (cart) setCart(cart);
    else console.log('No se Encontró carrito');
  }

  useEffect(() => {
    getCart()
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/user',
    })
    .then(res => {
      if (res.data) {
        setUser(res.data);
        findCartByUser(res.data._id)
      }
      else console.log('Usuario no logueado');           
    })
  }, [])  

	//iniciar sesion
  const login = () => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/user',
    })
    .then(res => {
      if (res.data) {
        setUser(res.data);      
        findCartByUser(res.data._id)
      }
    })
  }

	//cerrar sesion
  const logout = () => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8080/auth/logout'           
    })
    .then(res => 
      {
        if (res.status === 200) {
          setUser(null);
          setCart(null)
        }
      })    
  }

	//agregar al carrito
  const addToCart = async (idCart, idProduct, quantity) => {    
    axios ({
      method: "POST",
      data: {quantity},
      url: `http://localhost:8080/carts/${idCart}/${idProduct}`,
      withCredentials: true      
    })
    .then(res => {      
      alert('Producto agregado al carrito')
      /* refrescar el carrito */
      findCartByUser(user._id)
    })
    .catch(err => console.log(err))
  }

	//borrar un producto del carrito segun su id
  const deleteFromCart = async (idCart, idProduct) => {
    axios ({
      method: "DELETE",
      url: `http://localhost:8080/carts/${idCart}/${idProduct}`,
      withCredentials: true
    })
    .then(res => {
      alert('Producto eliminado del carrito')
      /* refrescar el carrito */
      findCartByUser(user._id)
    })
    .catch(err => console.log(err))
  }

	//borrar todos los productos de un carrito
  const deleteAllFromCart = async (idCart) => {
    axios ({
      method: "DELETE",
      url: `http://localhost:8080/carts/${idCart}/products`,
      withCredentials: true
    })
    .then(res => {      
      /* refrescar el carrito */
      findCartByUser(user._id)
    })
    .catch(err => console.log(err))
  }

	//mandar orden de compra
  const sendOrder = async () => {
    const cartId = cart._id
    const username = cart.username
    const email = cart.email
    const direccion = cart.direccion
    const userId = cart.userId
    const products = cart.products
    axios ({
      method: "POST",
      data: {products, userId, username, email, direccion},
      url: `http://localhost:8080/orders`,
      withCredentials: true
    })
    .then(res => {
      alert(`Orden Generada Con Exito. Tu numero de orden es: ${res.data._id}`)
      deleteAllFromCart(cartId)      
      /* refrescar el carrito ---> acá es necesario primero eliminar todo lo que esta en el carrito */
      /* findCartByUser(user._id) */
    })
    .catch(err => console.log(err))
  }

  const data = { user, cart, login, logout, addToCart, deleteFromCart, sendOrder, deleteAllFromCart };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;