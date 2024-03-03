import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm1 from "./CheckoutForm1";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
function Payment2() {
  const navigate = useNavigate();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const productid = useSelector((state) => state.posts.productid)
  //console.log(userid, productid)


  const { state } = useLocation();
  const { id, date, name, productQty, totalPrice } = state;
  //const pack = [{ name: 'Basic Listing', price: 315 }, { name: 'Priority Listing', price: 465 }]
  //const { name, price } = pack[id - 1]
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://api2.sciencejobs.com.au/api/stripeconfig").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: "AUD",
        amount: Math.round(totalPrice * 100),
        userid: userInfo.id, productid
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
  return (
    <>
      {clientSecret && stripePromise && (
        <div className="flex flex-col gap-4">
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm1 />
          </Elements>
          </div>
      )}
    </>
  );
}
export default Payment2;
