import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaStar } from "react-icons/fa";

import useAxiosSecure from "../../../../Hook/useAxiosSecuire";

const InstractorHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const [instructors, setInstructors] = useState([]);
  
    useEffect(() => {
      axiosSecure.get('https://creative-hero-surver.vercel.app/users')
        .then((data) => {
            console.log(data.data);
          const instructorData = data.data.filter((instructor) => instructor.role === 'instractor');
          console.log(instructorData);
          setInstructors(instructorData);
        });
    }, [axiosSecure]);
  


    return (
       <div className=" py-32 ">
        <h4 className="text-3xl my-4 font-bold text-center text-white">Our Instractor</h4>
       
         <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:px-32 px-5">
        {instructors.map((singleInstractor) => (
          <div className="shadow-2xl text-white flex flex-col items-center relative group w-full p-4 rounded-md overflow-hidden" key={singleInstractor._id}>
            <img className="h-36 w-36 rounded-full mx-auto" src={singleInstractor?.image} alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-y-3">
              <p className="text-white text-center p-2 flex gap-2">
                <span className="p-2 bg-[#8BD826] text-white rounded-full"><FaFacebook></FaFacebook></span>
                <span className="p-2 bg-[#8BD826] text-white rounded-full"><FaInstagram></FaInstagram></span>
                <span className="p-2 bg-[#8BD826] text-white rounded-full"><FaLinkedin></FaLinkedin></span>
              </p>
            </div>
            <p className="text-center mt-2 font-bold ">{singleInstractor?.userName}</p>
            <p className="text-center my-2">{singleInstractor?.email}</p>

            <div className="devider flex gap-2 text-yellow-200">
            <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
            </div>
         
          </div>
        ))}
      </div>
       </div>
      
      


    );
};

export default InstractorHome;