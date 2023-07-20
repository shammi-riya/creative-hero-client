import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { CgProfile } from 'react-icons/cg';
import { FcFeedback } from 'react-icons/fc';
import { FaBookmark, FaArrowRight, FaHome, FaBook } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import useAdmin from "../../Hook/useAdmin";
import useInstractor from "../../Hook/useInstractor";



const Dashbord = () => {
    const { user } = useAuth();

    const [isInstractor] = useInstractor();
    const [isadmin] = useAdmin();
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


                    <ul className="p-4 w-90 px-14 h-full text-xl text-left  text-white">
                        {
                            isadmin ? (<>
                                <li className="md:px-4 md:py-2 ">
                                    <NavLink to='/dashbord/managclass'
                                        className={({ isActive }) =>
                                            isActive ? 'text-[#5588d4]' : ''}><p className="flex gap-3"><FaBook></FaBook> <span>managclass</span></p></NavLink></li>


                                <li className="md:px-4 md:py-2 ">
                                    <NavLink to='/dashbord/managUsers'
                                        className={({ isActive }) =>
                                            isActive ? 'text-[#1462d6] font-bold' : ''}><p className="flex gap-3"><span><FaBook></FaBook></span> <span>managUsers</span></p></NavLink></li>

                            </>) :


                                (isInstractor) ? <>
                                    <li className="md:px-4 md:py-2 ">
                                        <NavLink to='/dashbord/profile'
                                            className={({ isActive }) =>
                                                isActive ? 'text-[#5588d4]' : ''}><p className="flex gap-3"><span><CgProfile></CgProfile></span> <span>My Profile</span></p></NavLink></li>


                                    <li className="md:px-4 md:py-2 ">
                                        <NavLink to='/dashbord/addcourse'
                                            className={({ isActive }) =>
                                                isActive ? 'text-[#061E43]' : ''}> < p className="flex gap-2"><span><FaBook></FaBook></span><span> Add Course</span></p></NavLink></li>


                                    <li className="md:px-4 md:py-2 ">
                                        <NavLink to='/dashbord/my course'
                                            className={({ isActive }) =>
                                                isActive ? 'bg-white text-blue-500' : ''}><p className="flex gap-2"><span><FaBook></FaBook></span>
                                                <span>my course</span></p></NavLink></li>

                                    <li className="md:px-4 md:py-2 ">
                                        <NavLink to='/dashbord/wishlist'
                                            className={({ isActive }) =>
                                                isActive ? 'text-[#5588d4] font-bold' : ''} > <p className="flex gap-3"><span><FaBookmark></FaBookmark></span><span>WishList</span></p></NavLink></li>


                                    <li className="md:px-4 md:py-2 ">
                                        <NavLink to='/dashbord/enroled'
                                            className={({ isActive }) =>
                                                isActive ? 'text-[#061E43]' : ''}> <p className="flex gap-3"> <span><FaBook></FaBook></span> <span>Enrolld Class</span></p></NavLink></li>
                                    <div className="divider"></div>



                                </> :
                                    <>
                                        <li className="md:px-4 md:py-2 flex">
                                            <NavLink to='/dashbord/select'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[#5588d4] font-bold' : ''}>  <p className="flex"><span><FaBook></FaBook> </span><span className="ml-3">selectclass</span></p></NavLink></li>
                                        <li className="md:px-4 md:py-2 ">
                                            <NavLink to='/dashbord/enroled'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[#5588d4] font-bold' : ''}>  <p className="flex"><span><FaBook></FaBook> </span><span className="ml-3">Enroll</span></p></NavLink></li>

                                        <li className="md:px-4 md:py-2 ">
                                            <NavLink to='/dashbord/feedback'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[#5588d4] font-bold' : ''}>
                                                <p className=" flex gap-3"><span><FcFeedback></FcFeedback></span >Feedback<span className="ml-3"></span></p>

                                            </NavLink></li></>
                        }


                        <li className="md:px-4 md:py-2 "><Link to='/'><p className="flex gap-2"><span><FaHome></FaHome></span> <span>Home</span></p></Link></li>
                        <div className="divider"></div>

                        <li className="md:px-4 md:py-2 "><Link><p className="flex gap-2"><span><FaArrowRight></FaArrowRight></span> <span>LogOut</span></p></Link></li>
                        <li className="md:px-4 md:py-2 "><Link><p className="flex gap-2"><span><CiSettings></CiSettings></span> <span>setting</span></p></Link></li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashbord;