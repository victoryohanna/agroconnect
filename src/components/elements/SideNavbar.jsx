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

import "../styles/sidenav.css";

const SideNavbar = () => {
  return (
    <div className=" vh-100 main-container">
      <div className="bg-white">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold ">
          <FaUserAstronaut />
          <br />
          <span>AgroConnect</span>
        </div>
        <ul className="list-group list-group-flush my-3">
          <li  className="list-group-item bg-transparent fs-5  second-te">
            <FaTachometerAlt className="me-2 " />
            <span>Dashboard</span>
          </li>
          <li  className="list-group-item bg-transparent fs-5 ">
            <FaGifts className="me-2 " />
            <span>Products</span>
          </li>
          <li  className="list-group-item bg-transparent fs-5  second-te">
            <FaChartLine className="me-2 " />
            <span>Analytics</span>
          </li>
          <li  className="list-group-item bg-transparent fs-5  second-te">
            <FaRegEnvelope className="me-2 " />
            <span>Report</span>
          </li>
          <li  className="list-group-item bg-transparent fs-5  second-te">
            <FaStore className="me-2 " />
            <span>Store</span>
          </li>
          <li  className="list-group-item bg-transparent fs-5  second-te">
            <FaRocketchat className="me-2 " />
            <span>Chat</span>
          </li>
          <li
            
            className="list-group-item bg-transparent fs-5  text-danger "
          >
            <FaSignOutAlt className="me-2 " />
            <span>Logout</span>
          </li>
        </ul>

        <div></div>
      </div>
    </div>
  );
};

export default SideNavbar;
