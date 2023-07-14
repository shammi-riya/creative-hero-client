
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  

  const { details } = useLoaderData();
  
  console.log(details);
  return (
    <div className="max-w-7xl mx-auto my-28">
     <div>
        <img className="w-full h-96" src={details.img} alt="" />
     </div>
     <div>
       

      <div className="text-xl font-semibold my-6">
      <p >ClassName: {details?.className}</p>
        <p className="text-xl">instructorEmail: {details?.instructorEmail}</p>
        <p className="text-xl"> instructorName:{details?.instructorName}</p>
        
        <p className="text-xl">availableSeats:{details?.availableSeats}</p>
        <p>price:${details?.price}</p>
        <p>catogory:{details?.category}</p>
        <p>Type:{details?.type}</p>
      </div>
        <div className="my-5">
        <p className="text-2xl font-bold">Course Description</p>
        <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
<div className="my-5">
        </div>
<p className="text-2xl font-bold">What You’ll Learn From This Course</p>

<ul>
    <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
    <li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li>        
    <li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li>        
</ul>
</div>
     </div>
    </div>
  );
};

export default CourseDetails;
