
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/Authprovider";



const Feedback = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()
    console.log(user);



    const onSubmit = (data) => {

        console.log(data);
        fetch('https://creative-hero-surver.vercel.app/feeddback', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: (JSON.stringify(data))
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId)
                    reset()
                toast.success('feedback suceessfully added')
            })


    }

    return (
        <div className="min-h-screen my-20  w-[70%]">
            <div className="text-center my-2">
                <h1 className="text-xl font-semibold my-2">Rate Us!</h1>
                <div className="rating rating-lg">
                    <input type="radio" name="rating-9" className="rating-hidden" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                </div>
            </div>
            <form className="bg-[#F3F3F3] p-5 w-full "
                onSubmit={handleSubmit(onSubmit)}>

                <div className="my-3 hidden">

                    <input
                        className="py-2 px-3 my-2 w-full rounded-sm"
                        {...register("userName", {
                            required: true
                        })}

                        value={user?.displayName}
                    />

                </div>


                <div className="my-3 hidden">

                    <input
                        className="py-2 px-3 my-2 w-full rounded-sm"
                        {...register("userImage", {
                            required: true
                        })}

                        value={user?.photoURL}
                    />

                </div>



                {/* <div className="my-3">
                    <label className="font-semibold my-3"
                        htmlFor="">Do you have any suggestion for us?</label> <br />
                    <input className="py-2 px-3 w-full my-2 rounded-sm"
                        {...register("feedback",
                            { required: true })}
                        placeholder="feedback"
                    />
                </div> */}


                <div className="my-3">
                    <label className="font-semibold my-3 text-center"
                        htmlFor="">Do you have any suggestion for us?</label> <br />
                    <textarea className="py-2 px-3 w-full my-3 textarea"
                        {...register("description",
                            { required: true })}
                        placeholder="description"
                    />
                </div>


                {errors.suggestion && <span className="text-red-400">This field is required</span>}
                {errors.likeProducts && <span className="text-red-400">This field is required</span>}

                <input type="submit"
                    value="Send Feedback"
                    className="bg-slate-600 text-slate-50 py-2 px-4 rounded-sm w-full" />
            </form>
        </div>
    );
};



export default Feedback;