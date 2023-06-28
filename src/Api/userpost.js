import axios from "axios";
import { toast } from "react-toastify";


export const postUser = (userInfo)=>{
    console.log(userInfo);
    axios
    .post("http://localhost:5000/user", { userInfo })
    .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
            toast.success(`welcome to creative Hero`)
        }
        // Additional code to handle the response data
    })
    .catch((error) => {
        console.log("Error occurred during POST request:", error);
        // Additional code to handle the error
    });
}
