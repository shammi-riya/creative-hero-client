import { useContext, useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { FaShoppingCart } from "react-icons/fa";
import useAddtoclass from "../../Api/useAddtoclass";

const Navber = () => {
  const [header,setHeader] = useState(false)
  const { user, logOut } = useContext(AuthContext);
  const [toQdata]= useAddtoclass()
  

  const handleLogOut = () => {
    logOut()
      .then({})
      .catch((err) => console.log(err));
  };




  //header style

  useEffect(()=>{

    const handleScroll =()=>{
      if(window.scrollY >300){
        setHeader(true)
     }else{
       setHeader(false)
     }
    }

    window.addEventListener('scroll',handleScroll)

    return(()=>{
      window.removeEventListener('scroll',handleScroll)
    })

  },[])
  
  

  return (
    <>
      <nav  className={`${
          header ? "fixed w-full top-0 left-0 right-0 transition-all duration-200 w-100" : "w-100 absolute top-0 left-0 right-0"
        } z-30 bg-[#353535] text-[#ffffff] w-100 px-8 md:px-auto py-3`}>
        <div className="md:h-16 h-28 mx-auto md:px-20 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-[#8BD826] md:order-1 text-3xl font-bold">
            <span>Creative Hero</span>
          </div>
          <div className="text-[#ffffff] order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li className="md:px-3  md:py-2 hover:text-[#8BD826]">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) => (isActive ? "text-[#8BD826]" : "")}
                >
                  Home
                </NavLink>
              </li>
              {user && (
                <li className="md:px-4 md:py-2 hover:text-[#8BD826]">
                  <NavLink
                    to="/dashbord"
                    className={({ isActive }) =>
                      isActive ? "text-[#8BD826]" : ""
                    }
                  >
                    Dashbord
                  </NavLink>
                </li>
              )}
              <li className="md:px-4 md:py-2 hover:text-[#8BD826]">
                <NavLink
                  to="/course/all"
                  className={({ isActive }) =>
                    isActive ? "text-[#8BD826]" : ""
                  }
                >
                  Course
                </NavLink>
              </li>
              <li className="md:px-4 md:py-2 hover:text-[#8BD826]">
                <NavLink
                  to="/instractor"
                  className={({ isActive }) =>
                    isActive ? "text-[#8BD826]" : ""
                  }
                >
                  Instractor
                </NavLink>
              </li>
              <li className="relative md:px-4 md:py-2 text-xl hover:text-[#8BD826]">
                <NavLink
                  to="dashbord/select"
                  className={({ isActive }) =>
                    isActive ? "text-[#8BD826]" : ""
                  }
                >
                  <FaShoppingCart />
                  <span className="absolute right-0 -top-3">
                    {toQdata.length || 0}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <div className="flex gap-2">
              {!user ? (
                <Link to="/login">
                  <button className="px-4 py-2 bg-[#8BD826] hover:bg-[#8BD826] text-[#ffffff] rounded-xl flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Login</span>
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 bg-[#8BD826] hover:bg-[#8BD826] text-[#ffffff] rounded-xl flex items-center gap-2"
                >
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
