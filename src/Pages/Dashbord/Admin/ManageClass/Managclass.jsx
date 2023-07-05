import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecuire";


const Managclass = () => {
  const [courses, setCourses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get("https://creative-hero-surver.vercel.app/allcourse");
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  // Rest of the code...

  





  const handleApprove = async (course) => {
    try {
      const response = await axios.patch(`https://creative-hero-surver.vercel.app/allClass/Approve/${course._id}`);
      if (response.data.modifiedCount) {
        const updatedCourses = courses.map((c) =>
          c._id === course._id ? { ...c, status: "Approved" } : c
        );
        setCourses(updatedCourses);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = (course) => {
    console.log(course);
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
                <td>{course.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(course)}
                    className="btn btn-sm text-white bg-[#061E43]"
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(course)}
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
