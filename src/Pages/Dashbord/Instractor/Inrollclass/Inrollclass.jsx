import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../../../Hook/useAuth";
import { useState } from "react";


const Inrollclass = () => {
const{user} = useAuth()
const [enrollClass,setEnrollclass] = useState([])



useEffect(() => {
    if (user?.email) {
      axios
        .get("https://creative-hero-surver-shammi-riya.vercel.app/enrollclass", {
          params: { email: user.email }, 
        })
        .then((res) => {
            setEnrollclass(res.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);




    return (
        <div>
            <h1 className="text-center text-3xl text-[#061E43] my-5">SuccessFuly Pement List</h1>
         <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                          
                            <th>classname</th>
                            <th>type</th>
                            <th>price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           enrollClass.map((course, i) => <>
                                <tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                   
                                    <td>
                                       {course.className}
                                    </td>
                                    <td>{course.type}</td>
                                    <td>{course.price}</td>
                                   
                                </tr>
                            </>)
                        }



                    </tbody>


                </table>
            </div>   
        </div>
    );
};

export default Inrollclass;