import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

//importamos el contexto + todas las paginas + todos los componentes
import ChatButton from './components/ChatButton/ChatButton';
import Header from './components/Header/Header';
import { UserProvider } from './context/userContext';
import Admin from './pages/Admin/Admin';
import CartContainer from './pages/Carts/CartsContainer';
import Categories from './pages/Categories/Categories';
import Chat from './pages/Chat/Chat';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Product from './pages/Products/Product';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/category/:category" element={<Categories/>} />
          <Route path="/products/edit/:id" element={<Edit/>} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/chat" element={<Chat />} />
        </Routes> 
        <ChatButton/>        
      </BrowserRouter>   
    </UserProvider>
  );
}

export default App;
