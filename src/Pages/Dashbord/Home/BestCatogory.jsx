import Slider from "react-slick";
import Button from "../../../Component/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { categories } from "../../../Api/categorydata";
import { Link } from "react-router-dom";

const BestCategory = () => {



    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
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



    return (
        <div className="lg:flex flex-wrap  text-[#ffffff] py-20 justify-between items-center lg:max-w-7xl w-full mx-auto">
            <div className="lg:w-[40%] w-full lg:px-0 px-5 space-y-3">
                <h4 className="text-[#8BD826]">COURSES CATEGORIES</h4>
                <h2 className="text-4xl font-bold">Explore Top Categories</h2>
                <Button>View All Category</Button>
            </div>
            <div className="lg:w-[60%] lg:px-0 px-5 lg:my-0 my-5 w-full ">
                <Slider {...settings}>

                    {categories.map((category, index) => (
                        <div key={index} 
                            className="shadow-2xl p-5 text-center shadow-current">
                            <div className="space-y-3">
                                <span className="hover:scale-110 duration-200 flex justify-center items-center text-4xl">
                                    {category.icon}
                                </span>
                                <h4>{category.title}</h4>
                                <Link to={`/course/${category.title}`}  > <button className="bg-[#8BD826]">View Details</button>  </Link>
                            </div>
                        </div>

                    ))}

                </Slider>
            </div>
        </div>
    );
};

export default BestCategory;
