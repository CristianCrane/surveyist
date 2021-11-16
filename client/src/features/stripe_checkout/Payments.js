import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { addUserCredits } from "../auth/authSlice";

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      name="Surveyist"
      description="Puchase campaign credits"
      panelLabel="Get credits"
      amount={500} // $5 in cents
      currency="USD"
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      token={(token) => dispatch(addUserCredits(token))}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
