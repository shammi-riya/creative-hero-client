import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { loadStripe } from "@stripe/stripe-js";

const Prement = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_pemenent_pk);
    const course = JSON.parse(localStorage.getItem("total"));
    
    const total = course.reduce((sum,item)=>sum+parseFloat(item.price) ,0)
   
   
    const totalPrice = total ? parseFloat(total).toFixed(2) : "0.00";
    return (
        <div className="w-full mx-auto">
           <Elements stripe={stripePromise}>
    <CheckoutForm totalPrice={totalPrice} course={course}/>
    </Elements> 
        </div>
    );
};

export default Prement;