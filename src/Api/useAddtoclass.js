import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAuth";


const useAddtoclass = () => {

    const {user} = useAuth()
    const { data: toQdata = [], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectcourse?email=${user?.email}`)
            return res.json();
        }


    })

    return [toQdata, isLoading,refetch]
};




export default  useAddtoclass;






  