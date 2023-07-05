import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import useAxiosSecure from "./useAxiosSecuire";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
     
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
