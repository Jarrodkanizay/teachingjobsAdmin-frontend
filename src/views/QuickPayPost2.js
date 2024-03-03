import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from 'react-router-dom';
import {
  useAddOrderedProductsMutation,
} from "../store/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Payment() {
  const navigate = useNavigate();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const productid = useSelector((state) => state.posts.productid)
  //console.log(userid, productid)//
  const [addOrderedProducts, { isLoading, isSuccess, isError, error }] = useAddOrderedProductsMutation();
  const [hasGST, setHasGST] = useState(true);
  const id = 1
  const pack = [{ name: 'Basic Listing', price: 315 }, { name: 'Priority Listing', price: 465 }]
  const { name, price } = pack[id - 1]
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  if (isSuccess) {
    navigate("/employer-center/");
  }
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
        amount: Math.round(hasGST ? price * 1.1 * 100 : price * 100),
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
        <div className="w-full h-full flex justify-around">
          <div className="">
            <table>
              <tbody>
                <tr>
                  <td>Your Order</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>${price}</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    <label htmlFor="includeGST">
                      ${(price * 0.1).toFixed(2)}
                    </label>
                    <input type="checkbox" id="includeGST" defaultChecked="true"
                      onClick={() => { setHasGST(prev => !prev) }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>
                    {
                      hasGST
                        ? (price * 1.1).toFixed(2)
                        :
                        price
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-4">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
            <button className="btn btn-secondary"
              onClick={() => {
                addOrderedProducts({ userId: userInfo.id, productid })
              }} >
              Pay By Invoice
            </button>
            {isError && error?.data?.message}
            {/* <button className="btn btn-secondary"
              onClick={() => {
                addOrderedProducts({ userid, productid });
              }}>
              Pay By Invoice
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
export default Payment;
