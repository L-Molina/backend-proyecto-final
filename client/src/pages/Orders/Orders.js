import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/userContext'
import axios from 'axios'
import './Orders.css'

const Orders = () => {
  const [userData, setUserData] = useState(null)
  const { user, cart } = useContext(UserContext)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    setUserData(user)    
  }, [cart]) 

  useEffect(() => {
    if(userData){
      axios({
        method: 'GET',
        withCredentials: true,
        url: `http://localhost:8080/orders`
      })
      .then(res => {
        /* obtener las ordenes de compra */
        const orders = res.data.filter(order => order.userId === user._id)
        setOrders(orders)
        console.log(orders);
      })
      .catch(err => console.log(err))
    }
  }, [userData])

  return (
    <div className='sectionContainer ordersContainer'>
      {userData
        ?
        <div className='orders'>
          <h2>TUS ORDENES DE COMPRA</h2>                   
          <div className='ordersList'>
            {orders === null || orders.length === 0            
            ? <p>No realizaste ninguna compra</p>
            :            
              orders.map(order => (
                <div className='order' key={order._id}>
                  <h3>Order ID: {order._id}</h3>
                  <p>Direccion de Entrega: {order.direccion}</p>
                  <p>Estado: {order.state}</p>
                  <p className='orderListContainer'>Productos:</p>
                  <ul>
                    {order.products.map(product => (
                      <li key={product._id} className='orderList'>
                        <p>{product.name}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio: ${product.price}</p>
                      </li>
                    ))} 
                  </ul>
                </div>
              ))}
          </div>
        </div>
        :
        <>
          <p>Por favor INICIE SESION</p>
          <Link to ="/login">Login</Link>
        </>
      }
      <div className="linkContainer"><Link to="/">VOLVER AL HOME</Link></div>
    </div>
  )
}

export default Orders