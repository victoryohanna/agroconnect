import { useState } from "react";
import {
  FaUserAstronaut,
  FaTachometerAlt,
  FaStore,
  FaChartLine,
  FaRegEnvelope,
  FaRocketchat,
  FaSignOutAlt,
  FaGifts,
} from "react-icons/fa";
import {Link} from 'react-router-dom'

import "../dashboard/styles/farmer.css";

import NewProduct from "../../components/dashboard/AddProduct";
import QuickLink from "../../components/elements/DashboardView";
import ProductsList from "../../components/dashboard/ProductList";



const FarmerDashboard = (props) => {
    const [productComponent, setProductComponent] = useState(false)
    const [productTableComponent, setProductTableComponent] = useState(true)

    const renderProductForm =()=>{
        setProductComponent(true)
        setProductTableComponent(false)
    }

    const renderProductTable =()=>{
        setProductTableComponent(true)
        setProductComponent(false)
    }

  return (
    <>
    <div className=" vh-100 sidenav-container">
      <div className="bg-w">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold ">
          <FaUserAstronaut />
          <br />
          <span>AgroConnect</span>
        </div>
        <ul className="list-group list-group-flush my-3">
          <li className="list-group-item bg-transparent fs-5  " onClick={renderProductForm}>
            <FaTachometerAlt className="me-2 " />
            <span>Dashboard</span>
          </li>
          <li className="list-group-item bg-transparent fs-5 " onClick={renderProductTable} >
            
            <FaGifts className="me-2 " />
            <span>Products</span>
           
          </li>
          <li className="list-group-item bg-transparent fs-5 " onClick={renderProductForm}>
            <FaChartLine className="me-2 " />
            <span>New Product</span>
          </li>
          <li className="list-group-item bg-transparent fs-5  second-te">
            <FaRegEnvelope className="me-2 " />
            <span>Report</span>
          </li>
          <li className="list-group-item bg-transparent fs-5  second-te">
            <FaStore className="me-2 " />
            <span>Store</span>
          </li>
          <li className="list-group-item bg-transparent fs-5 ">
            <FaRocketchat className="me-2 " />
            <span>Chat</span>
          </li>
          <li className="list-group-item bg-transparent fs-5  text-danger ">
            <FaSignOutAlt className="me-2 " />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="links-section">
    <QuickLink/>
    {/* {
        productComponent?<NewProduct/> : <ProductsList/>
    } */}
    
    </div>
    </>
    
  );
};

export default FarmerDashboard;
