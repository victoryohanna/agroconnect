import React, { useState, useEffect} from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import "./styles/navbar.css";

const Navbar = ({user}) => {

  return (

    <div className="">
      <nav className="navbar navbar-expand-lg a__navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
            <ul className=" navbar-nav d-flex">
            {user}
            <li className="nav-item me-2">
                <Link to="/register" className="nav-link"> 
                  Register
                </Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
