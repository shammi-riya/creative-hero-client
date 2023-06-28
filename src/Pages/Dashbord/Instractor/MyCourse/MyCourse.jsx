import { useEffect, useState } from "react";
import useAuth from "../../../../Hook/useAuth";
import axios from "axios";
import MycourseCardd from "./MycourseCardd";

const MyCourse = () => {
  const { user } = useAuth();
  const [mycourse,setMyCourse] = useState([])
console.log(mycourse);
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:5000/mycourse", {
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
  }, [user]);

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
