
// import { Link } from "react-router-dom";
import { FaGift, FaHandHolding, FaTruck, FaChartBar } from "react-icons/fa";

import '../styles/dashbordview.css'

import NewProduct from "../dashboard/AddProduct";
import ProductsList from "../dashboard/ProductList";

const QuickLink = () => { 
  return (
    <div className="container-fluid px-4 main-body  bg-b">
      <div className="row g-3 my-2">
        <div className="col-md-3">
          <div className="p-3 d-flex bg-white shadow-sm justify-content-around align-items-center rounded border">
            {/* <Link> */}
            <div>
                
              <h3 className="fs-2">730</h3>
              <p className="fs-4">Products</p>
            </div>
            <FaGift className="fs-1 primary-text " /> 
            {/* </Link> */}
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 d-flex bg-white shadow-sm justify-content-around align-items-center rounded border">
            <div>
              <h3 className="fs-2">6730</h3>
              <p className="fs-4">Sales</p>
            </div>
            <FaHandHolding className="fs-1 primary-text  " />
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 d-flex bg-white shadow-sm justify-content-around align-items-center rounded border">
            <div>
              <h3 className="fs-2">3591</h3>
              <p className="fs-4">Delivery</p>
            </div>
            <FaTruck className="fs-1 primary-text " />
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 d-flex bg-white shadow-sm justify-content-around align-items-center rounded border">
            <div> 
              <h3 className="fs-2">%25</h3>
              <p className="fs-4">Increase</p>
            </div>
            <FaChartBar className="fs-1 primary-text "/>
          </div>
        </div>
      </div>
      {/* <NewProduct/> */}
      {/* <ProductsList/> */}
    </div>
  );
};

export default QuickLink;
