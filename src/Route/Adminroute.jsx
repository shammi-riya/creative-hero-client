
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";


const Adminroute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin,isAdminLoading] = useAdmin();

    if (loading ||isAdminLoading) {
        return <><div>loading..............</div></>
    }

    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>


};


export default Adminroute;