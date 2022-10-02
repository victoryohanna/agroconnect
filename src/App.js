

import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Products from './pages/Products';
import Register from './pages/Register';
import LoginForm from './components/elements/LoginForm';
import RegistrationForm from './components/elements/RegistertrationForm';
// 

function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/register' element={<Register form={RegistrationForm}/>} />
        <Route path='/login' element={<Register form={LoginForm}/>} />
      </Routes>
      
    
    </div>
  );
}

export default App;
