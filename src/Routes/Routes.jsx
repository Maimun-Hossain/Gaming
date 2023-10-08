import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


const Routes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Routes;