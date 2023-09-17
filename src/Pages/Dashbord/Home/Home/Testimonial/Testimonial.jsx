
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://creative-hero-surver.vercel.app/feedback');
                const data = await response.json();
                setFeedbackData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

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
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className='my-36 lg:px-32 px-4'>
            <div className='text-center my-10 text-white'>
                <h3 className='text-2xl font-semibold'>What Students</h3>
                <h1 className='text-3xl font-bold'>Think and Say About Creative Hero</h1>
            </div>
           
                <div className='text-[#fff]'>
                <Slider {...settings}>

                    {feedbackData.map(feedback => (
                        <div key={feedback._id}
                        className="relative overflow-hidden shadow-2xl ">
                        <div className="max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">                       
                          <div className="lg:grid text-[#fff] lg:grid-cols-6 lg:gap-8 lg:items-center">
                            <div className="hidden lg:block lg:col-span-2">
                              <img className="rounded-xl" src={feedback.userImage} alt="Image Description"/>
                            </div>
                          
                      
                            <div className="lg:col-span-4">
                             
                              <blockquote>
                               <p className='text-3xl font-bold'>{feedback.feedback}</p>
                                <p className="text-lg font-medium  lg:text-xl lg:leading-normal ">
                                  {feedback.description}
                                </p>
                      
                                <footer className="mt-6">
                                  <div className="flex items-center">
                                    <div className="lg:hidden flex-shrink-0">
                                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                                    </div>
                                    <div className="ml-4 lg:ml-0">
                                      <p className="font-medium">
                                        {feedback.userName}
                                      </p>
                                      <p className="text-sm ">
                                        Head of Finance
                                      </p>
                                    </div>
                                  </div>
                                </footer>
                              </blockquote>
                              
                            </div>
                           
                          </div>
                          
                        </div>
                      </div>
                    ))}
                    </Slider>

                </div>
            
        </div>
    );
};

export default Testimonial;
