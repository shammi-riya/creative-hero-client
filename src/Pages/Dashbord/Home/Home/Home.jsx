import TopCatogory from "../TopCatogory/TopCatogory";
import Bannar from "./Bannar/Bannar";
import Testimonial from "./Testimonial/Testimonial";
import TopFeatureCourse from "./TopFeatureCourse/TopFeatureCourse";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <TopCatogory></TopCatogory>
            <TopFeatureCourse></TopFeatureCourse>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;