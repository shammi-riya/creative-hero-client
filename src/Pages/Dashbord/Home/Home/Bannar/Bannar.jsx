

import Button from '../../../../../Component/Button';

import bannar from '../../../../../assets/banner_img.png'


const Bannar = () => {

  
    return (
      <div className='
      bg-[#151515]'>
         <div className="py-32 h-[95vh] relative px-4 lg:px-32">
        
           <div className='lg:flex  justify-center items-center text-[#ffffff]'>
         <div  data-aos="fade-up"
         className='space-y-3 px-10 lg:text-start sm:text-center w-full my-5'>
         <h1 className='lg:text-6xl font-bold text-3xl'>Learn <span className='text-[#ffffff]'>skill</span> from <br /> our top instractor</h1>
         <p className='text-md'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.</p>
        <div >
      
        <Button>Explore Now</Button>
       
        </div>
         </div>
           
            <img className='h-fit py-10' src={bannar} alt="" />
           </div>
       
       </div>
      </div>
    );
};

export default Bannar;