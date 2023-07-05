import { useEffect, useState } from "react";
import useAuth from "../../../../Hook/useAuth";
import axios from "axios";
import MycourseCardd from "./MycourseCardd";
import useAxiosSecure from "../../../../Hook/useAxiosSecuire";

const MyCourse = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const [mycourse,setMyCourse] = useState([])

  useEffect(() => {
    if (user) {
      axiosSecure
        .get("/mycourse", {
          params: { email: user.email },
        })
        .then(function (response) {
          // handle success
         setMyCourse(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [user,axiosSecure]);

  return (
    <div className="grid grid-cols-4 gap-6 w-full px-12">
        {
            mycourse.map((course)=><>
              <MycourseCardd
              key={course._id}
              course={course}
              ></MycourseCardd>
            </>)
        }
      My Course
    </div>
  );
};

export default MyCourse;
