import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from 'react-router-dom';
function Payment() {
  const { id } = useParams();
  const pack = [{ name: 'Basic Post', price: 315 }, { name: 'Priority Listing', price: 465 }]
  const {name, price}=pack[id]
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    fetch("https://api1.sciencejobs.com.au/api/stripeconfig").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    fetch("https://api1.sciencejobs.com.au/api/paymentintent", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: "AUD",
        amount: price,
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
  return (
    <>
      {clientSecret && stripePromise && (
        <div className="w-full h-full flex justify-around">
          <div className="">
            <h1>Your Order</h1>
            <div className="flex flex-start gap-10">
              <span>{name}</span>
              <span>${price}</span>
            </div>
          </div>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </>
  );
}
export default Payment;
