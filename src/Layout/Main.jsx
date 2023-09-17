
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navber from "../Pages/Shared/Navber";


const Main = () => {
    return (
        <div className="bg-[#1B1B1B]">
            <Navber></Navber>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;

  