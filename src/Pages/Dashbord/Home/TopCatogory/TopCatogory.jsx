
import { Link } from 'react-router-dom'


const TopCatogory = () => {
   
    const categories = ['Marketting', 'PHP', 'Web Desin', 'graphick', 'pithone Development', 'SEO ', 'Web Development'];
   
    
    return (
        < div className='my-7'>
            <div className=" text-center space-y-2 my-10">
                <h1 className="text-4xl font-bold">Explore</h1>
                <h1 className="text-xl">Our Top Ctogorys</h1>
            </div>


            < div data-aos="fade-up"
                className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 py-3 sm:px-10 md:px-4 lg:px-32 ">

                {
                    categories.map((catogory) => <>
                        <Link to={`/course/${catogory}`}>
                            <div 
                                className="shadow-xl hover:scale-110 bg-blue-00 duration-300 mx-4 hover:bg-[#061E43] rounded-lg  duration-400 hover:text-white p-5 text-center text-8xl">
                                
                                <p className="text-lg block">{catogory}</p>
                            </div></Link>
                    </>)
                }






            </div>
        </div>

    );
};

export default TopCatogory;