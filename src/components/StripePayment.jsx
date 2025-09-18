// components/StripePayment.jsx
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51Pz8wrGHgCk42ts0C97M800yVU0PZA6HPMTizeojf9B5dzCBtX5G52XA7WCYFi76IPshTneecBKPdgXLpyX8XNbS000nnK7u5p"
);

const StripePayment = () => {
  return (
    <div className="container">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default StripePayment;
