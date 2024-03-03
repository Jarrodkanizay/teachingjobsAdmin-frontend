import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import {
  useAddOrderedProductsMutation,
} from "../store/apiSlice";
export default function CheckoutForm() {
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const productid = useSelector((state) => state.posts.productid)
  //console.log("username", username)
  //console.log("userid, productid", userid, productid)
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [addOrderedProducts] = useAddOrderedProductsMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/employer-center`,
        },
        payment_method: {
          billing_details: {
            name: `${userInfo.firtName} ${userInfo.lastName}` , // Full name of the cardholder
            email: userInfo.email
          },
          metadata: {
            userid: userInfo.id,
            productid: productid,
          },
        },
      });
      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
        setIsProcessing(false);
      } else {
        //alert(userid);
        //await addOrderedProducts({ userid, productid });
        setMessage("Payment successful!"); // You can set a success message if needed
      }
    } catch (error) {
      setMessage("An error occurred while processing the payment.");
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit" className="btn btn-primary">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
