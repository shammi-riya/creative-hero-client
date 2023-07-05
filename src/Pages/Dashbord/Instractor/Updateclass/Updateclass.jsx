import { useLoaderData } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Updateclass = () => {
 const updateCoffe = useLoaderData();
 

 const {availableSeats,className,img,_id,price,type} = updateCoffe;


 
    const { user } = useAuth()
   
    const { register, handleSubmit,  formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        const updatedData = {
          availableSeats: data.availableSeats,
          className: data.className,
          img: data.img,
          price: data.price,
          type: data.type
        };
    
        fetch(`https://creative-hero-surver.vercel.app/update/${_id}`, {
          method: "PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success('Updated successfully');
            }
          });
      };


    return (
        <div className="">
            <div className="w-[100%]  mx-auto my-10 p-6">
                <h2 className="text-center text-3xl my-4 border-b-2 w-1/3 mx-auto"> Add An Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="text-lg " htmlFor="">Class Name:</label>
                        <input className="w-full py-3 my-3 px-3"
                            placeholder="class Name"
                            defaultValue={className}
                            {...register("className")} />
                    </div>


                    <div className="grid md:grid-cols-2 gap-3 my-3">
                        <div>
                            <label className="text-lg" htmlFor="">Instructor Email:</label>
                            <input className="w-full py-3 px-3 my-3"
                                value={user?.email}
                                {...register("instructorEmail")} />
                        </div>
                        <div>
                            <label className="text-lg" htmlFor="">Instractor Name:</label>
                            <input className="w-full py-3 px-3 my-3"
                                value={user?.displayName}
                                {...register("instructorName")} />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 my-3">
                        <div>
                            <label className="text-lg" htmlFor="">Avalable Seats:</label>
                            <input className="w-full py-3 px-3 my-2"
                                placeholder="avalble Seats"
                                type="number"
                                defaultValue={availableSeats}
                                {...register("availableSeats", { required: true })} />
                        </div>
                        <div>
                            <label className="text-lg" htmlFor="">Course Fee:</label>
                            <input className="w-full py-3 px-3 my-2"
                                placeholder="Price"
                                type="number"
defaultValue={price}
                                {...register("price", { required: true })} />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 my-2">
                        <div>
                            <label className="text-lg" htmlFor="">Class Img:</label>
                            <input className="w-full py-3 px-3 my-2"
                                placeholder="Image Url"
                                type="url"
defaultValue={img}
                                {...register("img", { required: true })} />
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Stutus*</span>
                                </label>
                                <select defaultValue="Pick One" {...register("stutus", { required: true })} className="select select-bordered">
                                    <option disabled>Pick One</option>
                                    <option>pending</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                
                                <option
                                 disabled>select  One</option>
                                <option>Art And Design</option>
                                <option>buisness</option>
                                <option>Data Science</option>
                                <option>Web Desin</option>
                                <option>Web Development</option>
                                <option>pithone Development</option>
                                <option>Marketting</option>
                                <option>SEO</option>

                            </select>
                        </div>
                        <div className="form-control w-full pt-2">
                            <label className="label">
                                <span className="label-text">Stutus*</span>
                            </label>
                            <select  {...register("type", { required: true })} className="select select-bordered">
                                <option defaultValue={type}>select one</option>
                                <option>Ofline</option>
                                <option>online</option>

                            </select>

                            <div className="hidden">
                                <label className="text-lg" htmlFor="">Instractor Image:</label>
                                <input className="w-full py-3 px-3 my-3"
                                    value={user?.photoURL}
                                    {...register("instructorImg")} />
                            </div>
                        </div>
                    </div>

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="bg-[#061E43] w-full py-2 text-lg my-4 rounded text-white" type="submit" value="Update A Course" />
                </form>
            </div>
        </div>
    );
};

export default Updateclass;