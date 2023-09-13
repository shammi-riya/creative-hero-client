// import axios from "axios";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../../Hook/useAxiosSecuire";
// import useAddtoclass from "../../../../Api/useAddtoclass";
import { toast } from "react-toastify";
import useFetchCourses from "../../../../Hook/useFetchCourses";
import axios from "axios";


const Managclass = () => {
  const [courses, refetch] = useFetchCourses();

  

 const handleApprove = (id)=>{
  axios.patch(`https://creative-hero-surver-shammi-riya.vercel.app
/allClass/appruve/${id}`,{
    method:'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify({id:id})
  })
  .then(data=>{
    refetch()
    console.log(data.data);
    toast(data.data.message)
  })
 }



  

  const handleDeny = (id) => {
    fetch(`https://creative-hero-surver-shammi-riya.vercel.app
/allClass/Danny/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(data => {
        refetch()
        console.log(data);
        toast(data.message)
      })
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={course.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{course.className}</td>
                <td>{course.instructorEmail}</td>
                <td>{course.availableSeats}</td>
                <td>{course.category}</td>
                <td>{course.type}</td>
                <td>{course.price}</td>
                <td>{course.stutus}</td>
                <td>
                  <button
                    onClick={() => handleApprove(course._id)}
                    className="btn btn-sm text-white bg-[#061E43]"
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(course._id)}
                    className="btn btn-sm text-white bg-[#061E43]"
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managclass;
