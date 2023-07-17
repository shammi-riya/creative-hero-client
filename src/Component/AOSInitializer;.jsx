import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = ({ children }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>{children}</>;
};

export default AOSInitializer;