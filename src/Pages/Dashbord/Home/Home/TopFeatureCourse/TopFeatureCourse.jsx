import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const TopFeatureCourse = () => {
    const [activeButton, setActiveButton] = useState(5);
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    
    
   

    useEffect(() => {
        fetch('https://creative-hero-surver.vercel.app/allcourse')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // Filter and set the initially active button's category data
                const category = getCategoryNameByIndex(activeButton);
                const categoryCourses = data.filter((course) => course.category === category);
                setCategoryData(categoryCourses);
            });
    }, [activeButton]);




    const handleButtonClick = (index) => {
        setActiveButton(index);
        const category = getCategoryNameByIndex(index);
        const categoryCourses = data.filter((course) => course.category === category);
        setCategoryData(categoryCourses);
    };

    const getCategoryNameByIndex = (index) => {
        switch (index) {
            case 0:
                return 'Web Development';
            case 1:
                return 'Web Desin';
            case 2:
                return 'Marketting';
            case 3:
                return 'SEO';
            case 4:
                return 'Data Science';
            case 5:
                return 'graphick';
            default:
                return '';
        }
    };


   
    return (
        <div className='lg:max-w-7xl mx-auto w-full'>
            <div className="flex justify-center items-center text-center mt-28">
                <div>
                    <div>
                        <p className="text-4xl font-bold my-5 text-[#ffffff]">Top Feature Course</p>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:justify-center sm:items-center text-start">
                        <button
                            className={`font-semibold  hover:bg-[#8BD826] px-2 bg-[#353535] rounded-2xl ${activeButton === 5 ? 'bg-[#8BD826] text-[#ffffff]' : ' shadow-2xl '}`}
                            onClick={() => handleButtonClick(5)}
                        >
                            Graphic Design
                        </button>
                        <button
                            className={`font-semibold bg-[#353535] hover:bg-[#8BD826] text-center px-2 rounded-2xl ${activeButton === 0 ? 'bg-[#8BD826] text-[#ffffff]' : ' shadow-2xl border-2 border-[#ffffff]'
                                }`}
                            onClick={() => handleButtonClick(0)}
                        >
                            Web Development
                        </button>
                        <button
                            className={`font-semibold bg-[#353535]  hover:bg-[#8BD826] px-2 rounded-2xl ${activeButton === 1 ? 'bg-[#8BD826] text-[#ffffff]' : ' shadow-2xl border-2 border-[#ffffff]'
                                }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            Web Design
                        </button>
                        <button
                            className={`font-semibold bg-[#353535] hover:bg-[#8BD826] px-2 rounded-2xl ${activeButton === 2 ? 'bg-[#8BD826] text-[#ffffff]' : ' shadow-2xl border-2 border-[#ffffff]'
                                }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            Marketing
                        </button>
                        <button
                            className={`font-semibold bg-[#353535] shadow-2xl hover:bg-[#8BD826]  px-2 rounded-2xl ${activeButton === 3 ? 'bg-[#8BD826] text-[#ffffff]' : ' shadow-2xl border-2 border-[#ffffff] shadow-inherit'
                                }`}
                            onClick={() => handleButtonClick(3)}
                        >
                            SEO
                        </button>


                    </div>


                </div>
            </div>

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   my-7'>
                {categoryData.map((course) => (
                    <Link to={`/courses/${course._id}`} key={course._id}>
                        <div className='card-wrapper'>
                            <div className="card card-compact bg-transparent text-[#ffffff] shadow-2xl border-2 border-[#ffffff] ">
                                <figure><img className='h-56 w-full rounded-tl' src={course.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-semibold">{course?.className}</h2>
                                    <p className='text-sm mb-6'>availableSeats: {course.availableSeats}</p>
                                    <div className=''></div>
                                    <div className=" items-center flex justify-between text-md">
                                       
                                        <div>
                                            <p className='text-md'>Price: ${course.price}</p>
                                        </div>
                                        <Link to={`/courses/${course._id}`}>
                                        <button className='bg-[#8BD826] hover:bg-[#83a259] hover:border-2 border-[#ffff] text-[#ffff]'>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default TopFeatureCourse;
