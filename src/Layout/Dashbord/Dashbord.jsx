import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { CgProfile } from 'react-icons/cg';
import { FaBookmark, FaArrowRight, FaHome, FaBook } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';



const Dashbord = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-gray-200">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#061E43] text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <div className="flex justify-center items-center mt-10">
                        <div className="avatar">
                            <div className="w-12 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>

                        <div>
                        
                        </div>
                    </div>
                    <p className="text-md my-3 text-center">{user?.email}</p>


                    <ul className="menu  p-4 w-90  h-full text-xl text-left  text-white">
                        {/* Sidebar content here */}

                        <li className="md:px-4 md:py-2 ">
                            <NavLink to='/dashbord/profile'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#5588d4]' : ''}><span><CgProfile></CgProfile></span> My Profile</NavLink></li>


                        <li className="md:px-4 md:py-2 ">
                            <NavLink to='/dashbord/addcourse'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#061E43]' : ''}> <span><FaBook></FaBook></span> Add Course</NavLink></li>


                        <li className="md:px-4 md:py-2 ">
                            <NavLink to='/dashbord/my course'
                                className={({ isActive }) =>
                                    isActive ? 'bg-white text-blue-500' : ''}><span><FaBook></FaBook></span>
                                my course</NavLink></li>

                        <li className="md:px-4 md:py-2 ">
                            <NavLink to='/dashbord/wishlist'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#061E43]' : ''} > <span><FaBookmark></FaBookmark></span>WishList</NavLink></li>


                        <li className="md:px-4 md:py-2 ">
                            <NavLink to='/dashbord/enroled'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#061E43]' : ''}>  <span><FaBook></FaBook></span> Enrolld Class</NavLink></li>
                        <div className="divider"></div>

                        <li className="md:px-4 md:py-2 "><Link to='/'><span><FaHome></FaHome></span> Home</Link></li>
                        <div className="divider"></div>

                        <li className="md:px-4 md:py-2 "><Link><span><FaArrowRight></FaArrowRight></span> LogOut</Link></li>
                        <li className="md:px-4 md:py-2 "><Link><span><CiSettings></CiSettings></span> setting</Link></li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashbord;