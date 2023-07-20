import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import axios from "axios";
import { toast } from "react-toastify";


const CheckoutForm  = ({totalPrice,course}) => {
    const stripe = useStripe();
    const {user} = useAuth()
    const elements = useElements();
  const [err,setErr] = useState('')
  const [proccesing,setProcesing] =useState(false);
  const [transactionId, setTransactionId] = useState('');

const [clientSecret,setClientSecret] = useState('')


console.log(course);


  useEffect(() => {
    
    fetch('https://creative-hero-surver-shammi-riya.vercel.app/create-payment-intent', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }), 
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
       
      });
  }, [totalPrice]);
  






const handleSubmit =async (event)=>{
    event.preventDefault();

    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }


      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setErr(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      setProcesing(true)
      if (!clientSecret) {
        console.log("Client secret is not available yet.");
        return;
      }
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );

    if (confirmError) {
        console.log(confirmError);
    }
    console.log(paymentIntent,'p');
    setProcesing(false)
    if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
  
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          totalPrice,
          date: new Date(),
          quantity: course.length,
          cartItems: course.map((item) => item._id),
          category: course.map((item) => item.category),
          className: course.map((item) => item.className),
        };
  
        axios.post("https://creative-hero-surver-shammi-riya.vercel.app/payments", payment).then((res) => {
          console.log(res.data);
          if (res.data.insertResult.insertedId) {
           toast.success('Your pement sucess!')
          }
        });
      }


    };


  

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary my-3" type="submit" disabled={!stripe || !clientSecret ||proccesing}>
        Pay
      </button>
    </form>

    <p className="text-xl text-red-400">{err}</p>
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm ;