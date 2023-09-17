import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllcourse = () => {

    const {data: allcourse, isLoading,refetch} = useQuery({
        queryKey:['all-course'],
        queryFn:async()=>{
            const res= await axios.get(`https://creative-hero-surver.vercel.app/allcourse`)
            return res.data
        }

    })

    return [allcourse, isLoading,refetch]
};

export default useAllcourse;