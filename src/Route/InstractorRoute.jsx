import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useInstractor from "../Hook/useInstractor";


const InstractorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isInstractor,isInstractorLoading] = useInstractor()
    

    if (loading ||isInstractorLoading) {
        return <><div>loading..............</div></>
    }

    if (user && isInstractor) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>


};

export default InstractorRoute;