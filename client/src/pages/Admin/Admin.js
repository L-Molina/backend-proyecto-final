import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductsContainer from '../../components/Product/ProductsContainer'
import UserContext from '../../context/userContext'

const Admin = () => {
  const {user} = useContext (UserContext)  
  return (
    <div className='sectionContainer'>
      {user &&
      user.username === 'Elmo'
        ?
          <>
            <ProductsContainer/>    
            <div className="linkContainer"><Link to="/">VOLVER A HOME</Link></div>   
          </>
        :
          <h1>NO TIENES LOS PERMISOS PARA VER ESTA PAGINA</h1>}
    </div>
  )
}

export default Admin