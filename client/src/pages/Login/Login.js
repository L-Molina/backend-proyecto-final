import { useContext, useState } from "react"
import axios from "axios"
import "./Login.css"
import UserContext from "../../context/userContext"
import { Link, useNavigate } from "react-router-dom"

const URL = 'http://localhost:8080/auth/login'

const Login = (props) => {
  const {login} = useContext (UserContext)
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email:"",
    password:""    
  })

	//handleInputChange
  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  } 
 
	//handleSubmit
  const handleSubmit =  (event) => {
    event.preventDefault()
    //post with axios, save the cookie
    axios({
      method: "POST",
      origin: "http://localhost:3000",
      data: user,
      withCredentials: true,
      url: URL           
    })
    .then(async res => {
      /* si hay un error */
      if (res.status === 200) {                      
        login()         
        navigate('/')
      }    
    })  
    .catch(err => {
      alert('error de logueo')
      console.log('error de logueo', err)
  	})      
  }    

  return (
    <div className="sectionContainer formulario">      
      <form className="form">
        <legend>INICIAR SESION</legend>
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" placeholder="Email" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">CONTRASEÑA</label>
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
        </div>
        <button onClick={handleSubmit} className='form-button'>LOGIN</button>        
      </form>
      <div className="linkContainer"><Link to="/register">IR A REGISTRARSE</Link></div>
    </div>
  )
}

export default Login