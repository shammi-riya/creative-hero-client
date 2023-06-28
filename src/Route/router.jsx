import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester";
import Dashbord from "../Layout/Dashbord/Dashbord";
import MyProfile from "../Pages/Dashbord/Instractor/MyProfile/MyProfile";
import Addclass from "../Pages/Dashbord/Instractor/Addclass/Addclass";
import Wishlist from "../Pages/Dashbord/Instractor/Wishlist/Wishlist";
import MyCourse from "../Pages/Dashbord/Instractor/MyCourse/MyCourse";
import Inrollclass from "../Pages/Dashbord/Instractor/Inrollclass/Inrollclass";
import Privetroute from "./Privetroute";
import Updateclass from "../Pages/Dashbord/Instractor/Updateclass/Updateclass";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/regester",
          element: <Regester></Regester>,
        },
      ],
    },
    {
      path:'dashbord',
      element:<Privetroute><Dashbord></Dashbord></Privetroute>,
      children: [
        // instractor
        {
          path: "Profile",
          element: <MyProfile></MyProfile>,
        },
        {
          path: "addcourse",
          element: <Addclass></Addclass>,
        },
        {
          path: "my course",
          element: <MyCourse></MyCourse>,
        },
        {
          path: "update/:id",
          element: <Updateclass></Updateclass>,
          loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
        },
        
        {
          path: "wishlist",
          element: <Wishlist></Wishlist>,
        },
        {
          path: "enroled",
          element:<Inrollclass></Inrollclass>,
        },
        
      ],
    },
   
  ]);

export default router;