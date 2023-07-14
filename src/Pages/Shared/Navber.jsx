import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";


const Navber = () => {
	const { user, logOut } = useContext(AuthContext);
    const [selectCourse,setSelectCourse] = useState('')
	useEffect(() => {
        if (user) {
            axios
                .get("https://creative-hero-surver.vercel.app/selectcourse", {
                    params: { email: user.email },
                })
                .then(function (response) {
                    // handle success
                    setSelectCourse(response.data);
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    }, [user]);




	const handleLogOut = () => {
		logOut()
			.then({})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<nav className=" absolute top-0 left-0 z-10 w-full
           bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto py-3">
				<div className="md:h-16 h-28 mx-auto md:px-20 container flex items-center justify-between flex-wrap md:flex-nowrap">

					<div className="text-[#061E43] md:order-1 text-3xl font-bold">

						<span>Creative Hero</span>

					</div>
					<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
						<ul className="flex font-semibold justify-between">
							<li className="md:px-4 md:py-2 hover:text-[#061E43]"><NavLink className={({ isActive }) =>
								isActive ? 'text-[#061E43]' : ''
							}>Home</NavLink></li>
							{
								user && <li className="md:px-4 md:py-2 hover:text-[#061E43]"><NavLink to='/dashbord'
								className={({ isActive }) =>
									isActive ? 'text-[#061E43]' : ''
								}>Dashbord</NavLink></li>
							}
							<li className="md:px-4 md:py-2 hover:text-[#061E43]"><NavLink to='/course'
								className={({ isActive }) =>
									isActive ? 'text-[#061E43]' : ''
								}>course</NavLink></li>
							<li className="md:px-4 md:py-2 hover:text-[#061E43]"><NavLink to="/instractor"
							className={({ isActive }) =>
								isActive ? 'text-[#061E43]' : ''
							}>Instractor</NavLink></li>

							<li className="relative md:px-4 md:py-2 text-xl hover:text-[#061E43]"><NavLink to='dashbord/selectcourse'
								className={({ isActive }) =>
									isActive ? 'text-[#061E43]' : ''
								}><FaShoppingCart></FaShoppingCart></NavLink>
								
								<span className="absolute right-0 -top-3">{selectCourse?.length || 0}</span>
								</li>
								




						</ul>
					</div>

					<div className="order-2 md:order-3">
						<div className="flex gap-2">

							{
								!user ? <><Link to='/login'><button
									className="px-4 py-2 bg-[#061E43] hover:bg-[#061E43] text-gray-50 rounded-xl flex items-center gap-2">

									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
									<span>Login</span>
								</button></Link></> : <><button onClick={handleLogOut} className="px-4 py-2 bg-[#061E43] hover:bg-[#061E43] text-gray-50 rounded-xl flex items-center gap-2">

									<span>Login Out</span>
								</button></>
							}



						</div>
					</div>
				</div>
			</nav >


		</div >
	);
};

export default Navber;