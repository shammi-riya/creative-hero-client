import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
import Managclass from "../Pages/Dashbord/Admin/ManageClass/Managclass";
import Managusers from "../Pages/Dashbord/Admin/Managusers/Managusers";
import SelectClass from "../Pages/Dashbord/Student/SelectClass/SelectClass";
import Enrollclass from "../Pages/Dashbord/Student/Enrollclass/Enrollclass";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Dashbord/Home/Home/Home";
import Adminroute from "./Adminroute";
import InstractorRoute from "./InstractorRoute";
import Feedback from "../Pages/Dashbord/Student/Feedback";
import InstractorHome from "../Pages/Dashbord/Home/InstractorHome/InstractorHome";
import CourseDetails from "../Pages/Dashbord/Home/Home/CourseDetails/CourseDetails";
import Prement from "../Pages/Dashbord/Prement/Prement";
import Err from "../Component/Err";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
      errorElement: <Err></Err>,
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
    
      {
        path: "/course/:category",
        element: <Courses></Courses>,
        loader: ({ params }) => fetch(`https://creative-hero-surver-shammi-riya.vercel.app/allcourse/${params.category}`)
        

      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(`https://creative-hero-surver-shammi-riya.vercel.app/allcourses/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
              return { details: data }; 
            });
        }
      },
      {
        path: "/instractor",
        element: <InstractorHome></InstractorHome>
      },
      
    ],
  },
  {
    path: 'dashbord',
    element: <Privetroute><Dashbord></Dashbord></Privetroute>,
    children: [
      // instractor>
      {
        path: "Profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addcourse",
        element: <InstractorRoute><Addclass></Addclass></InstractorRoute>,
      },
      {
        path: "my course",
        element: <InstractorRoute><MyCourse></MyCourse></InstractorRoute>,
      },
      {
        path: "update/:id",
        element: <InstractorRoute><Updateclass></Updateclass></InstractorRoute>,
        loader: ({ params }) => fetch(`https://creative-hero-surver.vercel.app/update/${params.id}`)
      },

      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "enroled",
        element: <Inrollclass></Inrollclass>,
      },


      // admin

      {
        path: 'managclass',
        element: <Adminroute><Managclass></Managclass></Adminroute>
      },
      {
        path: 'managUsers',
        element: <Adminroute><Managusers></Managusers></Adminroute>
      },

      // student
      {
        path: 'select',
        element: <SelectClass></SelectClass>
      },

      {
        path: 'enrolldclass',
        element: <Enrollclass></Enrollclass>
      },
      {
        path: 'feedback',
        element: <Feedback></Feedback>
      },
      {
        path: 'pement',
        element: <Prement></Prement>
      }

    ],
  },

]);

export default router;