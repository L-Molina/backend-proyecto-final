import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    edad: '',
    telefono: '',
    direccion: '',
    email: '',
    emailb: '',
    password: ''  
  })

  // Expresiones regulares para los campos del form
  const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{2,25}$/i  
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im 
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i  
  const [error, setError] = useState('');
  const [file, setFile] = useState()

	//handleChange
	const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

	//handleFile
  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

	//handleRegister
  const handleRegister = (e) => {
    e.preventDefault()
    if (user.password !== user.passwordb) {
      setError('Los contraseñas no coinciden');
      return;     
    }    
    const formData = new FormData()
    formData.append('username', user.username)
    formData.append('edad', user.edad)
    formData.append('telefono', user.telefono)
    formData.append('direccion', user.direccion)
    formData.append('email', user.email)
    formData.append('password', user.password)
    formData.append('myFile', file)
    axios({
      method: 'POST',
      url: 'http://localhost:8080/auth/register',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      alert('Usuario registrado con exito')
      navigate('/login')
    })
    .catch(err => 
      {
        alert('Ya existe usuario con ese email')
        console.log(err)
      })
  }

	return (
    <div className="sectionContainer">
      <div className="formulario">				
				<form className="form" onSubmit={handleRegister}>
					<legend>REGISTRO DE USUARIO</legend>                    
					<div className="form-group">
						<label htmlFor="name">NOMBRE</label>
						<input type="text" className="form-control" name="username" id="username" placeholder="Nombre de Usuario" required onChange={handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="name">EDAD</label>
						<input type="text" className="form-control" name="edad" id="edad" placeholder="Edad del Usuario" required onChange={handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="name">TELEFONO</label>
						<input type="text" className="form-control" name="telefono" id="telefono" placeholder="Telefono - Incluir Codigo de Pais y Ciudad" required onChange={handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="name">DIRECCION</label>
						<input type="text" className="form-control" name="direccion" id="direccion" placeholder="Direccion del Usuario" required onChange={handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="precio">EMAIL</label>
						<input type="text" className="form-control" name="email" id="email" placeholder="Email" required onChange={handleChange}/>
					</div>  
					<div className="form-group">
						<label htmlFor="precio">CONTRASEÑA</label>
						<input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" required onChange={handleChange}/>
					</div> 
					<div className="form-group">
						<label htmlFor="precio">CONFIRMAR CONTRASEÑA</label>
						<input type="password" className="form-control" name="passwordb" id="passwordb" placeholder="Repita la Contraseña" required onChange={handleChange}/>
					</div> 
          {error && <p style={{ color: 'red' }}>{error}</p>}					     
					<div className="form-group">
						<label htmlFor="foto">FOTO DE PERFIL</label>
						<input type="file" className="form-control" name="myFile" id="foto" required onChange={handleFile}/>
					</div>
					<div className="form-button">
          {nombreRegex.test(user.username) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.passwordb && user.password
            ?<button type="submit" className="addBtn">REGISTRARSE</button>             
            :<button disabled type="submit" className="addBtnDsbl">REGISTRARSE</button>             
          }
					</div> 
				</form>			
			</div>
      <div className="linkContainer"><Link to="/">VOLVER AL HOME</Link></div>
    </div>
  )
}

export default Register