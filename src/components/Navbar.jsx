import React, {useState} from "react";
import {Link} from "react-router-dom"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";


//import Search from "./elements/search";
import "./styles/navbar.css"
//import logo from "../../assets/logo.png";

const Menu = () =>(
<div className="a__navbar-links">
    <ul className="nav-links">
        <Link to="/" className="home">
            <li>Home</li>
        </Link>
        <Link to="/about" className="about">
            <li>About</li>
        </Link>
        <Link to="/contact" className="contact">
            <li>Contact</li>
        </Link> 
    </ul>
</div>
)

const Navbar = ()=>{

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
      
        <div className="a__navbar">
           
                {/* <div className="a__navbar-logo">
                   <Link to = "/" ><img src={logo} alt="logo" /></Link> 
                </div> */}
                <div className="a__navbar_container">
                    <Menu />
                </div>
            <div className="a__navbar-menu">
                {toggleMenu 
                ? < RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} /> 
                : < RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} /> 
                }
                {toggleMenu &&(
                    <div className="a__navbar-menu_container">
                        <Menu />
                    </div>
                    
                )}
            </div>

            {/* <Search /> */}
        </div> 
    )
}

export default Navbar;