import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

import { postUser } from "../../Api/userpost";

const ShosalLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createGogoolUser, creteGithubUser, } = useContext(AuthContext)
    const from = location.state?.from?.pathname || "/";

    const handleGogool = () => {
        createGogoolUser()
          .then((userCredential) => {
            const user = userCredential.user;
            const userInfo = {
              userName: user.displayName,
              email: user.email,
              image: user.photoURL,
            };
    
            postUser(userInfo)
    
         
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("Error occurred during Google sign-in:", error);
            // Additional code to handle the error
          });
      };




    const handleGithub = () => {
        creteGithubUser()
            .then((userCredential) => {

                const user = userCredential.user;
                // Tudu:USER COLLEC
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            });

    }












    return (

        <div>
            <div className="py-6 space-x-2">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
                <span onClick={handleGogool}
                    className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
                <span onClick={handleGithub}
                    className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">g</span>
            </div>
        </div>
    );
};

export default ShosalLogin;