

import TopCatogory from "../TopCatogory/TopCatogory";
import Bannar from "./Bannar/Bannar";
import Subscribe from "./Subscribe/Subscribe";
import Testimonial from "./Testimonial/Testimonial";
import TopFeatureCourse from "./TopFeatureCourse/TopFeatureCourse";
import AOSInitializer from '../../../../Component/AOSInitializer;';


const Home = () => {
   
    return (
        
            <>
             <AOSInitializer>
      
      <Bannar />
      <TopCatogory />
      <TopFeatureCourse />
      <Testimonial />
      <Subscribe />
    
  </AOSInitializer></>
        
    );
};

export default Home;