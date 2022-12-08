
// import { Link } from "react-router-dom";
import { FaGift, FaHandHolding, FaTruck, FaChartBar } from "react-icons/fa";
// import {Bar} from 'react-chartjs-2'
import BarChart from "../../utils/chart/BarChart";

import '../styles/dashbordview.css' 

const QuickLink = () => { 
  return (
    <div className="container-fluid px-4  ">
      <div className="row g-3 my-2">
        <div className="col-md-6">
          <div className="p-4 d-flex shadow justify-content-around align-items-center rounded border dat">
            {/* <Link> */}
            <div>
                
              <h3 className="fs-2">730</h3>
              <p className="fs-4">Products</p>
            </div>
            <FaGift className="fs-1 primary-text " /> 
            {/* </Link> */}
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 d-flex  shadow justify-content-around align-items-center rounded border dat">
            <div>
              <h3 className="fs-2">6730</h3>
              <p className="fs-4">Sales</p>
            </div>
            <FaHandHolding className="fs-1 primary-text  " />
          </div>
          <div className="chart_line"></div>
        </div>

        <div className="col-md-6">
          <div className="p-4 d-flex shadow justify-content-around align-items-center rounded border dat">
            <div>
              <h3 className="fs-2">3591</h3>
              <p className="fs-4">Delivery</p>
            </div>
            <FaTruck className="fs-1 primary-text " />
          </div>
          <div className="chart_bar"></div>
        </div>

        <div className="col-md-6">
          <div className="shadow   rounded border dat">
          <div className="p-4 d-flex justify-content-around align-items-center ">
            <div> 
              <h3 className="fs-2">%25</h3>
              <p className="fs-4">Increase</p>
            </div>
            <FaChartBar className="fs-1 primary-text "/>
          </div>
          <div className="chart_bar">
            <BarChart/>
          </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default QuickLink;
