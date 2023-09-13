
import Bannar from "./Bannar/Bannar";
import Subscribe from "./Subscribe/Subscribe";
import Testimonial from "./Testimonial/Testimonial";
import TopFeatureCourse from "./TopFeatureCourse/TopFeatureCourse";
import AOSInitializer from '../../../../Component/AOSInitializer;';
import BestCatogory from "../BestCatogory";


const Home = () => {

    return (

        <div className="bg-[#151515]">
            <AOSInitializer>

                <Bannar />
                <BestCatogory></BestCatogory>
                
                <TopFeatureCourse />
                <Testimonial />
                <Subscribe />

            </AOSInitializer></div>

    );
};

export default Home;