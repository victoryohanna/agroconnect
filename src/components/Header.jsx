//import {useState, useEffect} from 'react';
import image from "../assets/images5.jpg";

import PopularProducts from "../components/Popular_Products";
import Featured from "../components/Featured";

import Products from "../components/items";

import "./styles/header.css";

const Header = () => {
  return (
    <div className="container header__container">
      <div className="card header">
        <div className="card-body card_body ">
          {/* <div className='header section__padding' id='hom'> */}

          <div className="header-text-section">
            <div className="header-text">
              <div className="header-title-section">
                <h1 className="header-title">AgroConnect</h1>
                {/* <p className='header-subtitle'> A vibrant social digital technology initiative.</p> */}
              </div>
              <div className="header-context-section">
                <p>
                  {" "}
                  A digital market solution that bring farmers and buyers
                  together.
                </p>
                <p>
                  Creating value for farmers and cunsumers for substainable
                  growth and development
                </p>
              </div>
            </div>
          </div>
          <div className="header-img-section">
            <img className="main__img" src={image} alt="" />
          </div>

          {/* </div> */}
        </div>
      </div>

      <div className="container d-flex ">
        <Featured product={Products} />
      </div>
      <div className="popular-products__container">
        <PopularProducts popularproducts={Products} />
      </div>
    </div>
  );
};

export default Header;
