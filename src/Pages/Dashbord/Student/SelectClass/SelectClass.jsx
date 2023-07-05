import { useEffect, useState } from "react";
import useAuth from "../../../../Hook/useAuth";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";


const SelectClass = () => {
    const { user } = useAuth();
    const [selecCourse, setSelectCourse] = useState([]);
    


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

  
    const handleDelete = (id) => {
        fetch(`https://creative-hero-surver.vercel.app/deleteCourse/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
           if(data.deletedCount>0){
            toast.success('deleted success')
           }
            setSelectCourse(prevData => prevData.filter(course => course._id !== id));
          });
      };
      







    return (

        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>classname</th>
                            <th>type</th>
                            <th>price</th>
                            <th>action</th>
                            <th>pement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selecCourse.map((course, i) => <>
                                <tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>
                                       {course.className}
                                    </td>
                                    <td>{course.type}</td>
                                    <td>{course.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(course._id)}
                                        className="btn btn-sm bg-red-600 text-white text-md"><FaTrash></FaTrash></button>
                                    </th>
                                    <th>
                                        <button className="btn btn-sm text-white bg-[#061E43]">Pay</button>
                                    </th>
                                </tr>
                            </>)
                        }



                    </tbody>


                </table>
            </div>

            <div>






            </div>
        </>
    );
};

export default SelectClass;