import {Link} from 'react-router-dom';
import {FaUserAstronaut, FaTachometerAlt, FaStore, FaChartLine, FaRegEnvelope, FaRocketchat, FaSignOutAlt, FaGifts} from 'react-icons/fa';

const SideNavbar = () =>{
    return(
        <div className="d-flex border" id="wrapper">
            <div className="bg-white">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold ">
                    <FaUserAstronaut/> <span>AgroConnect</span>
                </div>
                <div className='list-group list-group-flush my-3'>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaTachometerAlt className='me-2 '/><span>Dashboard</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaGifts className='me-2 '/><span>Products</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaChartLine className='me-2 '/><span>Analytics</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaRegEnvelope className='me-2 '/><span>Report</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaStore className='me-2 '/><span>Store</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  second-te'>
                        <FaRocketchat className='me-2 '/><span>Chat</span>
                    </Link>
                    <Link to='/' className='list-group-item bg-transparent fs-5  text-danger '>
                        <FaSignOutAlt className='me-2 '/><span>Logout</span>
                    </Link>
                </div>

                <div></div>
            </div>
        </div>
    )
}

export default SideNavbar;