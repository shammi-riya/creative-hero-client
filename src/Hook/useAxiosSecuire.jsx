import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'https://creative-hero-surver-shammi-riya.vercel.app',
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate(); 


    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('access-token');
          if (token) {
            config.headers.authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await logOut();
              navigate('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [logOut, navigate]);

  return [axiosSecure]
};

export default useAxiosSecure;
