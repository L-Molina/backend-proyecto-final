import { useContext } from "react"
import { Link } from "react-router-dom"
import ProductsContainer from "../../components/Product/ProductsContainer"
import UserContext from "../../context/userContext"
import "./Home.css"

const Home = () => {  
  const {user} = useContext (UserContext)

	return (
    <div className="sectionContainer home">
      {user
        ?
          <>
            <ProductsContainer/> 
            {user.username === 'Elmo' && <div className="linkContainer"><Link to ="/admin">IR AL PANEL DEL ADMINISTRADOR</Link> </div>}
          </>
        :
          <>
            <div className="authContainer">
              <Link to ="/login">Iniciar Sesión</Link>
              <Link to ="/register">Registrarse</Link>
            </div>
          </>
      }
    </div>    
  )
}

export default Home