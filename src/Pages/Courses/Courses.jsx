import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
// import useAxiosSecure from "../../Hook/useAxiosSecuire";


const Courses = () => {
  
  const [courseData, setCourseData] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    setCourseData(loaderData);
  }, [loaderData]);
 
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
 


  

  

//   useEffect(()=>{

//     const fetchCourses = async () => {
//       try {
//         const courses = await getAllCourse();
//         // Do something with the courses data
//         setCourseData(courses);
//       } catch (error) {
//         // Handle the error
//         console.error(error);
//       }
//     };

// fetchCourses()
//   },[])



  // const seoCourse = courseData.filter(course=>course.category== 'SEO')
  // console.log(seoCourse);


  const handleAdtoselect = (course) => {
    const { category, className, price, type, img, _id } = course;

    if (user) {
      const courseWithUser = {
        ...course,
        email: user.email // Add the user's email to the course object
      };

      axios
        .post('https://creative-hero-surver.vercel.app/selectclass', courseWithUser, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          const data = response.data;
          if (data.insertedId) {
            toast.success('Class select success');
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            const errorMessage = error.response.data.error;
            toast.error(errorMessage);
          } else {
            console.error(error);
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to select the class',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Please login!'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };


  return (
   <>

<div className="max-w-7xl mx-auto grid my-28   grid-cols-4 gap-6">
      {
        courseData.map(course => <><div key={course._id}>
          <div className=" card my-6 relative rounded bg-[#061E43] shadow-xl">
            <div>
              <figure><img className="h-60 w-full relative" src={course.img} alt="Shoes" /></figure>
              <div className="badge absolute top-2 right-2 bg-[#061E43] p-3 text-white">{course.category}</div>
            </div>
            <div className="card-body h-56 text-white">
              <h2 className="text-2xl card-title">{course.className}</h2>

              <p> avalable Seats :{course.availableSeats}</p>
              <p className="p-0">Course Type: {course.type}</p>


              <div className="flex justify-between items-center ">
                <p className="text-[#5588d4] text-xl">${course.price}</p>
                <button onClick={() => handleAdtoselect(course)}
                  className="py-2 px-3 text-white bg-[#5588d4] rounded-md text-xl">Select</button>
              </div>
            </div>
          </div>
        </div></>)
      }
    </div>
   </>
  );
};

export default Courses;