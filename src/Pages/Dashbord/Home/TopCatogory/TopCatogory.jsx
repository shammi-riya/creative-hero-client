import img1 from '../../../../assets/2202_w039_n003_123_businessdoodle_p1_123.jpg'
import img2 from '../../../../assets/web-design-front-end-development-isometric-concept_106788-1516.avif'
import img3 from '../../../../assets/im3.avif'
import img4 from '../../../../assets/software-development-operations-system-concept_107791-17423.avif'
import img5 from '../../../../assets/abstract-background-design_1302-4423.avif'
import img6 from '../../../../assets/im1.avif'
import img7 from '../../../../assets/art.avif'

const TopCatogory = () => {
    return (
        < div className='my-7'>
            <div className=" text-center space-y-2 my-10">
                <h1 className="text-4xl font-bold">Explore</h1>
                <h1 className="text-xl">Our Top Ctogorys</h1>
            </div>


            < div
                className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 py-3 px-32 ">



                <div className="shadow-xl hover:scale-110 bg-blue-00 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                    <div>
                        <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img1} alt="" />

                        </span>
                    </div>
                    <p className="text-lg block">Digital Marketting</p>
                </div>


                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                    <div>
                        <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img3} alt="" />

                        </span>


                    </div>
                    <p className="text-lg block">PHP</p>
                </div>




                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                    <div>
                    <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img4} alt="" />

                        </span>
                    </div>
                    < p className="text-lg block">Web Design</p>
                </div>
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img5} alt="" />

                        </span>

                    <p className="text-lg block">Graphic Design</p>
                </div>
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img6} alt="" />

                        </span>

                    <p className="text-lg block">Pythone </p>
                </div>

                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img7} alt="" />

                        </span>

                    <p className="text-lg block">Seo Optimization</p>
                </div>
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img3} alt="" />

                        </span>
                    <p className="text-lg block">Art And Design</p>
                </div >
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img1} alt="" />

                        </span>

                    <p className="text-lg block">Data Science</p>
                </div >
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img4} alt="" />

                        </span>

                    < p className="text-lg block">Development</p>
                </div>
                <div className="shadow-xl text-[#061E43] hover:scale-110 duration-300 hover:bg-[#061E43]  duration-400 hover:text-white p-5 text-center text-8xl">
                <span className="flex justify-center items-center p-3">
                            <img className="h-16 w-16 transition-all duration-300 transform group-hover:rotate-45" src={img2} alt="" />

                        </span>


                    <p className="text-lg block">Buisness</p>
                </div>


            </div>
        </div>

    );
};

export default TopCatogory;