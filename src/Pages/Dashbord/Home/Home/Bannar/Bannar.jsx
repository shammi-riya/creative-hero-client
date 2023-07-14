
import Button from '../../../../../Component/Button';

import bannar from '../../../../../assets/banner_img.png'
const Bannar = () => {
    return (
      <div className=' bg-gray-200'>
         <div className="py-32 min-h-screen relative px-32">
         <div className="flex justify-between items-center">
           <div className='flex justify-center items-center text-[#061E43]'>
         <div className='space-y-3 px-10'>
         <h1 className='text-6xl font-bold '>Learn <span className='text-blue-800'>skill</span> from <br /> our top instractor</h1>
         <p className='text-md'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.</p>
        <div >
      
        <Button>Explore Now</Button>
       
        </div>
         </div>
           </div><div>
            <img className='h-fit py-10' src={bannar} alt="" />
           </div>
        </div>
       </div>
      </div>
    );
};

export default Bannar;