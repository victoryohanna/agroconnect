

import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Products from './pages/Products';
// 

function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Products/>} />
      </Routes>
      
    
    </div>
  );
}

export default App;
