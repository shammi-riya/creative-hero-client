import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MycourseCardd = ({ course }) => {

    const { className,
        img,
        instructorEmail,
        _id,
        price,
        instructorName,
        category,
        availableSeats,
        instructorImg } = course;


    return (
        <div>
            <div className="card bg-[#061E43] shadow-xl text-white relative ">
                <div className="relative">
                    <figure >
                        <img className=" h-64" src={img} alt="Shoes" /></figure>


                    <p className="text-md absolute top-1 right-1 bg-[#061E43] shadow-xl text-white p-2 rounded">${price}</p>
                </div>
                <div className='h-64 p-2'>
                    <div className="badge bg-blue-600 text-white py-3 my-3">

                        {category}
                    </div>
                    <div className=" ">
                        <h2 className="card-title">
                            {className}

                        </h2>
                        <p className='flex items-center text-xl'> Avalble Seats:<span> </span>{availableSeats}</p>

                        <div>
                            <div className="divider "></div>





                            <div className="absolute bottom-6 left-1 right-1">
                                <div className="flex  w-full justify-between">
                                    <div className=" flex gap-2">
                                        <div className="w-10 h-10  ">
                                            <img src={instructorImg} />
                                        </div>

                                        <div className='text-sm'>
                                            <p>{instructorEmail}</p>
                                            <p>{instructorName}</p>
                                        </div>
                                    </div>
                                    <div>
                                      <Link to={`/dashbord/update/${_id}`}>  <span 
                                        className='text-3xl '><FaEdit></FaEdit></span></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default MycourseCardd;