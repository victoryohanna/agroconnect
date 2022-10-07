
import NewProduct from "../../components/dashboard/AddProduct";
import SideNavbar from "../../components/elements/SideNavbar";
import QuickLink from "../../components/elements/DashboardView";

const FarmerDashboard = () =>{
    return(
        <div className="container-fluid d-flex">
            <SideNavbar/>
            <QuickLink/>
            {/* <NewProduct/> */}
        </div>
    )
}

export default FarmerDashboard;