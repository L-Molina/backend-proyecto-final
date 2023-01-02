import './Carts.css'
import { useContext } from 'react'
import UserContext from '../../context/userContext'
import Carts from './Carts'
import { Link } from 'react-router-dom'

const CartContainer = () => {
  const { cart } = useContext(UserContext)
  return (
    <div className='sectionContainer cartContainer'>
      <h2>DETALLE DEL CARRITO</h2>
      {cart && cart.products.length > 0
        ?
        <Carts cart={cart}/>
        :
        <p>No hay productos en el carrito</p>
      }  
      <div className="linkContainer"><Link to="/">VOLVER AL HOME</Link></div>     

    </div>
  )
}

export default CartContainer