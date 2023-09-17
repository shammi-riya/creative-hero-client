import { Link } from "react-router-dom";


const Card = ({course}) => {
    return (
        <div key={course._id}>
            <div className="h-[500px] m-4  text-white card my-6 relative rounded  shadow-2xl">
              <div>
                <figure><img className="w-full  h-60" src={course.img} alt="Shoes" /></figure>
                <div className="badge absolute bg-[#8BD826] top-2 right-2 text-[#ffff] p-3 ">{course.category}</div>
              </div>
              <div className="p-2 ">
                <h2 className="text-2xl font-bold">{course.className}</h2>

                <p> avalable Seats :{course.availableSeats}</p>
                <p className="p-0">Course Type: {course.type}</p>


                <div className="flex justify-between items-center ">
                  <p className="text-[#5588d4] text-xl">${course.price}</p>

                </div>

                
              </div>
              <Link to={`/courses/${course._id}`}>
                  <button
                    className="py-2 hover:bg-[#739349]  w-full absolute bottom-1 text-white bg-[#8BD826] rounded-md text-xl">View details</button></Link>
            </div>

          </div>
    );
};

export default Card;