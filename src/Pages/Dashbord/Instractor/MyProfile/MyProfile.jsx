import useAuth from "../../../../Hook/useAuth";


const MyProfile = () => {


    const {user} = useAuth();
    console.log(user);


    return (
        <div>
            pto
        </div>
    );
};

export default MyProfile;