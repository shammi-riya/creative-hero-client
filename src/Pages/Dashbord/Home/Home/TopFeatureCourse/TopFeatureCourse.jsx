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
        <div>
            <div className="flex justify-center items-center text-center mt-28">
                <div>
                    <div>
                        <p className="text-4xl font-bold my-5">Top Feature Course</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            className={`font-semibold py-3 px-2 rounded-2xl ${activeButton === 5 ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handleButtonClick(5)}
                        >
                            Graphic Design
                        </button>
                        <button
                            className={`font-semibold py-3 px-2 rounded-2xl ${activeButton === 0 ? 'bg-blue-500 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick(0)}
                        >
                            Web Development
                        </button>
                        <button
                            className={`font-semibold py-3 px-2 rounded-2xl ${activeButton === 1 ? 'bg-blue-500 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            Web Design
                        </button>
                        <button
                            className={`font-semibold py-3 px-2 rounded-2xl ${activeButton === 2 ? 'bg-blue-500 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            Marketing
                        </button>
                        <button
                            className={`font-semibold py-3 px-2 rounded-2xl ${activeButton === 3 ? 'bg-blue-500 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick(3)}
                        >
                            SEO
                        </button>


                    </div>


                </div>
            </div>

            <div data-aos="fade-up"
            className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-32 my-7'>
                {categoryData.map((course) => (
                    <Link to={`/courses/${course._id}`} key={course._id}>
                        <div className='card-wrapper'>
                            <div className="card card-compact bg-base-100 shadow-xl hover:scale-110 hover:shadow-xl transition duration-500">
                                <figure><img className='h-56 w-full' src={course.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-semibold">{course?.className}</h2>
                                    <p className='text-lg mb-6'>availableSeats: {course.availableSeats}</p>
                                    <div className='border-[1px] border-gray-300'></div>
                                    <div className="card-actions flex justify-between text-md">
                                        <div>
                                            <p>{course.instructorEmail}</p>
                                        </div>
                                        <div>
                                            <p>Price: ${course.price}</p>
                                        </div>
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
