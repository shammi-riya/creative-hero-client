

import { FaRegUser, FaTrash, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecuire from "../../../../Hook/useAxiosSecuire";
import { useQuery } from "@tanstack/react-query";
const Managusers = () => {
    const [axiosSecure] = useAxiosSecuire()


    const { data: users = [], refetch, isLoading, isError } = useQuery(['users'], async () => {
        const response = await axiosSecure.get('/users');
      
        return response.data;
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: Failed to fetch user data</div>;
    }









    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/admin/${user._id}`)
            .then(response => {
                console.log(response.data);
                if (response.data.modifiedCount) {
                    toast.success(`${user.userName} is admin`);
                    refetch()
                }
            })
            .catch(error => {
                console.error(error);
            });
    }



    const handleMakeinstractor = (user) => {
        axiosSecure.patch(`/instractor/${user._id}`)
            .then(response => {
                if (response.data.modifiedCount) {
                    toast.success(`${user.userName} is instractor`);
                    refetch()
                }
            }) .catch(error => {
                console.error(error);
            });





        }

            const handleDelete = (id) => {
                axiosSecure
                  .delete(`/users/${id}`)
                  .then((response) => {
                    console.log(response.data);
                    toast.success('User deleted successfully');
                    refetch()
                    // Perform any additional actions after successful deletion
                  })
                  .catch((error) => {
                    console.error(error);
                    // Handle the error
                  });
              };


    

        return (
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th># </th>
                                <th>image</th>
                                <th>name</th>
                                <th>email</th>
                                <th>Make Admin</th>
                                <th>Make Instractor</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <>
                                    <tr>
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td>
                                            {user.userName}
                                        </td>
                                        <td>{user.email}</td>


                                        <th>
                                            <button onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm text-white bg-[#061E43]">{user.role == "admin" ? "admin" : <FaUserShield></FaUserShield>}</button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleMakeinstractor(user)}
                                                className="btn btn-sm text-white bg-[#061E43]">{user.role == "instractor" ? "instractor" : <FaRegUser></FaRegUser>}</button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(user._id)}
                                                className="btn btn-sm bg-red-600 text-white text-md"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                                </>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
        );
    };

    export default Managusers;