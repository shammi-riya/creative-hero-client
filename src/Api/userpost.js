import axios from "axios";
import { toast } from "react-toastify";


export const postUser = (userInfo) => {

    axios
        .post("https://creative-hero-surver.vercel.app/user", { userInfo })
        .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
                toast.success(`welcome to creative Hero`)
            }
            // Additional code to handle the response data
        })
        .catch((error) => {
            console.log("Error occurred during POST request:", error);
            // Additional code to handle the error
        });




}



// get all course
export   const getAllCourse = async () => {
    try {
        const response = await axios.get('http://localhost:5000/allcourse');
        const data = response.data;
        return data;

    } catch (error) {
        console.log(error);
    }
}

export   const getcourseDetails = async () => {
    try {
        const response = await axios.get('http://localhost:5000/allcourse');
        const data = response.data;
        return data;

    } catch (error) {
        console.log(error);
    }
}
