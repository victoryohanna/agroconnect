
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Products from './pages/Products';
import Register from './pages/Register';
import LoginForm from './components/elements/LoginForm';
// import RegistrationForm from '../components/elements/RegistertrationForm';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"

import FarmerDashboard from './pages/dashboard/Farmer';


function App() { 

  const [isLoggin, setIsLoggin] = useState(false);
  
  return (
    isLoggin ?(<FarmerDashboard/>): (<div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      
    
    </div>)
  );
}

export default App;
