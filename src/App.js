import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import "./App.css";

import Products from "./pages/Products";
// import Register from './pages/Register';
import LoginForm from "./components/elements/LoginForm";
import RegistrationForm from "./components/elements/RegistertrationForm";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ProductCategory from "./components/elements/ProductCategory";

import FarmerDashboard from "./pages/dashboard/Farmer";
import { AuthContext } from "./context/AuthContext";
import ProductDetail from "./components/elements/ProductDetails";

function App() {
  const { isLoggin } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();

  const ProtectedRoutes = ({ children }) => {
    return isLoggin ? children : <Navigate to="/login" />;
  };

  const isLogout = () => {
    return (
      setCurrentUser(
        <li className="nav-item me-2">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      ) && localStorage.removeItem("user")
    );
  };

  const toggleUser = () => {
    return isLoggin
      ? setCurrentUser(
          <li className="nav-item me-2 " onClick={isLogout}>
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
        )
      : setCurrentUser(
          <li className="nav-item me-2">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        );
  };

  useEffect(() => {
    toggleUser();
  }, [isLoggin]);

  return (
    <div>
      <Navbar user={currentUser} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductCategory />}/>  
        </Route>
        <Route path=":id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <FarmerDashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
