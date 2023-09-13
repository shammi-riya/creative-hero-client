import { FaStar } from 'react-icons/fa';
import { BiSolidQuoteSingleRight } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

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

    return (
        <div className='my-36 lg:px-32 px-4'>
            <div className='text-center my-10 text-white'>
                <h3 className='text-2xl font-semibold'>What Students</h3>
                <h1 className='text-3xl font-bold'>Think and Say About Creative Hero</h1>
            </div>
            <Marquee>
                <div className='flex justify-between items-center flex-nowrap gap-2 lg:gap-8 w-full  lg:max-w-7xl mx-auto'>

                    {feedbackData.map(feedback => (
                        <div className='w-full'
                            key={feedback._id}>

                            <div className='bg-gray-100 p-5 rounded space-y-5 h-96  w-full'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex gap-3'>
                                        <img className='h-14 w-14 rounded-full' src={feedback?.userImage} alt='' />
                                        <div>
                                            <h1 className='text-2xl font-semibold'>{feedback?.userName}</h1>
                                            <p>Student</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex text-4xl p-0'>
                                            <BiSolidQuoteSingleRight />
                                            <BiSolidQuoteSingleRight />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-2xl font-semibold text-blue-400'>{feedback?.feedback}</p>
                                        <p>{feedback?.description.slice(0, 220)}..</p>
                                    </div>
                                    <div className='flex gap-2 my-3 text-xl text-yellow-200'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;
