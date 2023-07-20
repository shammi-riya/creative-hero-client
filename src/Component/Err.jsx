import { Link } from 'react-router-dom';
import img from '../assets/3828537.jpg';
const Err = () => {
    return (
        <div>
            <img className='w-full h-[90vh]' src={img} alt="" />

            <h2 className='text-xl text-center'> Go To HOME
                <Link to='/'><button className='btn btn-primary px-5'>HOME</button></Link></h2>
        </div>
    );
};

export default Err;