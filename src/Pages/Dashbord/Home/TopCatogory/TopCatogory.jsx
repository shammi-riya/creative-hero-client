import img1 from '../../../../assets/2202_w039_n003_123_businessdoodle_p1_123.jpg'
import img2 from '../../../../assets/web-design-front-end-development-isometric-concept_106788-1516.avif'
import img3 from '../../../../assets/im3.avif'
import img4 from '../../../../assets/software-development-operations-system-concept_107791-17423.avif'
import img5 from '../../../../assets/abstract-background-design_1302-4423.avif'
import img6 from '../../../../assets/im1.avif'
import img7 from '../../../../assets/art.avif'
import { useEffect, useState } from 'react'
import { getAllCourse } from '../../../../Api/userpost'
import { Link } from 'react-router-dom'

const TopCatogory = () => {

    const categories = ['Marketting', 'PHP', 'Web Desin', 'graphick', 'Python', 'SEO ', 'Web Development'];
    const [courseData, setCourseData] = useState([]);
    // 
    const [filteredData, setFilteredData] = useState([]);
    const getImageForCategory = (index) => {
        switch (index) {
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            case 4:
                return img4;
            case 5:
                return img5;
            case 6:
                return img6;
            case 7:
                return img7;
            default:
                return '';
        }
    };


    useEffect(() => {

        const fetchCourses = async () => {
            try {
                const courses = await getAllCourse();

                setCourseData(courses);
            } catch (error) {
                // Handle the error
                console.error(error);
            }
        };

        fetchCourses()
    }, [])


    const handleCatogory = (category) => {
        console.log(category);
        const filterData = courseData.filter(course => course.category === category);
        setFilteredData(filterData);
    }

    console.log(filteredData);


    return (
        < div className='my-7'>
            <div className=" text-center space-y-2 my-10">
                <h1 className="text-4xl font-bold">Explore</h1>
                <h1 className="text-xl">Our Top Ctogorys</h1>
            </div>


            < div
                className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 py-3 px-32 ">

                {
                    categories.map((catogory, index) => <>
                        <Link to={`/course/${catogory}`}>
                            <div onClick={() => handleCatogory(catogory)}
                                className="shadow-xl hover:scale-110 bg-blue-00 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                                <div>
                                    <span className="flex justify-center items-center p-3">
                                        <img
                                            src={getImageForCategory(index + 1)}
                                            className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" alt="" />

                                    </span>
                                </div>
                                <p className="text-lg block">{catogory}</p>
                            </div></Link>
                    </>)
                }






            </div>
        </div>

    );
};

export default TopCatogory;