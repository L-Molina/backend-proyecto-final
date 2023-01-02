import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)

	//add
  const add = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

	//remove
  const remove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <div className="itemCountContainer">
        <div className='counterContainer'>
					<p>Cantidad:</p>
          <button onClick={remove}>-</button>
          <p>{count}</p>
          <button onClick={add}>+</button>
        </div>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount