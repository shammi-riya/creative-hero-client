import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAuth";


const useAddtoclass = () => {

    const {user} = useAuth()
    const { data: toQdata = [], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://creative-hero-surver-shammi-riya.vercel.app/selectcourse?email=${user?.email}`)
            return res.json();
        }


    })

    return [toQdata, isLoading,refetch]
};




export default  useAddtoclass;






  