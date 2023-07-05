import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import useAxiosSecure from "./useAxiosSecuire";
import { useQuery } from "@tanstack/react-query";

const useInstractor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


   const {data:isInstractor, isLoading: isInstractorLoading} = useQuery({
  
    queryKey:['isInstractor', user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/user/instractor/${user.email}`);
       
        return res.data.instractor;
      },
   })


    return [isInstractor,isInstractorLoading]
};

export default useInstractor;