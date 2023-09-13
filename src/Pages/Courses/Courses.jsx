import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAddtoclass from "../../Api/useAddtoclass";



const Courses = () => {



  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff0000', 
      },
      secondary: {
        main: '#00ff00', 
      },
    },
  });




const [, ,refetch] = useAddtoclass()
  const [courseData, setCourseData] = useState([]);
  const loaderData = useLoaderData();
  

  const [currentPage, setCurrentPage] = useState(1)

  const [paginatedData, setpagintaedData] = useState([])

  let itemPerpage = 8



  useEffect(() => {
    setCourseData(loaderData);
  }, [loaderData]);



  useEffect(() => {
    let lastIndex = currentPage * itemPerpage;
    let fristIndex = lastIndex - itemPerpage;
    const result = courseData.slice(fristIndex, lastIndex);
    setpagintaedData(result)
  }, [currentPage, courseData, itemPerpage]);





  const totalProducts = loaderData.length;



  const totalPage = Math.ceil(totalProducts / itemPerpage);




  const handleChange = (event, value) => {
    setCurrentPage(value);
  }




  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()





  const handleAdtoselect = (course) => {
    if (user) {

      const CourseDetails = {
        className: course.className,
        availableSeats: course.availableSeats,
        price: course.price,
        category: course.category,
        type: course.type,
        instructorEmail: course.instructorEmail,
        instructorName: course.instructorName,
        email: user.email, classId: course._id
      }
      axios
        .post('https://creative-hero-surver-shammi-riya.vercel.app/selectclass', CourseDetails, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          const data = response.data;
          if (data.insertedId) {
            refetch()
            toast.success('Class select success');
          }
        })
        .catch(error => {
          console.log(error);
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
    <div className="bg-[#151515]">

      <div className=" max-w-7xl mx-auto grid py-24 grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-6">
        {
          paginatedData.map(course => <><div key={course._id}>
            <div className="h-[500px] text-white card my-6 relative rounded  shadow-2xl">
              <div>
                <figure><img className="w-full  h-60" src={course.img} alt="Shoes" /></figure>
                <div className="badge absolute bg-[#8BD826] top-2 right-2 text-[#ffff] p-3 ">{course.category}</div>
              </div>
              <div className="p-3  py-3 ">
                <h2 className="text-xl card-title">{course.className}</h2>

                <p> avalable Seats :{course.availableSeats}</p>
                <p className="p-0">Course Type: {course.type}</p>


                <div className="flex justify-between items-center ">
                  <p className="text-[#5588d4] text-xl">${course.price}</p>

               
                <button onClick={() => handleAdtoselect(course)}
                  className="py-2 px-3  text-white bg-[#5588d4] rounded-md text-xl">Select</button>
                   </div>
              </div>
            </div>

          </div></>)
        }



      </div>

      <div className="text-center py-5">

        <ThemeProvider theme={theme}>
          <div className="w-full h-full flex justify-center items-center py-10">
            <Pagination onChange={handleChange} count={totalPage} color="primary" />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Courses;