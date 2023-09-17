
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hook/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import useAddtoclass from "../../../../../Api/useAddtoclass";

import useAllcourse from "../../../../../Hook/useAllcourse";
import Slider from "react-slick";
import Card from "../../../../../Component/Card";

const CourseDetails = () => {
  const [allcourse] = useAllcourse()
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const [, , refetch] = useAddtoclass()
  const { details } = useLoaderData();



  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 2000,
                cssEase: "linear"
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};










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
    <div className="lg:max-w-6xl mx-auto w-full px-4 text-[#fff] py-32">

      <h3 className="text-center  text-3xl py-10 font-semibold">Course Details</h3>
      <div className="flex w-full justify-center gap-4 ">
        <div>
          <img className="rounded-md h-96" src={details.img} alt="" />
        </div>
        <div className="text-xl lg:w-1/2 my-6 space-y-3">
          <p className="text-3xl font-bold">ClassName: {details?.className}</p>
          <p >instructorEmail: {details?.instructorEmail}</p>
          <p className="text-lg"> instructorName:{details?.instructorName}</p>
          <p className="text-lg">availableSeats:{details?.availableSeats}</p>
          <p>catogory:{details?.category}</p>
          <p>Type:{details?.type}</p>
          <p>price:${details?.price}</p>

          <button onClick={() => handleAdtoselect(details)}
            className="py-2 px-3 hover:bg-[#b7cb9c]  text-white bg-[#8BD826] rounded-md text-xl">Select</button>
        </div>
      </div>


      <div>
        <div className="shadow-2xl bg-[#353535] rounded-md py-5 px-3 font-bold text-xl text-[#fff] my-10"><h4>Sujjest class You May Like</h4></div>

        <div className="lg:px-0 px-5 lg:my-0 my-5 w-full text-[#ffff] ">
                <Slider {...settings}>

        {
         allcourse?.map(course => <><Card 
          key={course._id}
          course={course}
         ></Card></>)
        }
</Slider>
      </div>
      </div>
    </div>
  );
};

export default CourseDetails;
