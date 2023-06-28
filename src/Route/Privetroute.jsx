import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Privetroute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <><div>loading..............</div></>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>


};

export default Privetroute;