import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
  return (
    <StripeCheckout
      name="Surveyist"
      description="Puchase campaign credits"
      panelLabel="Get credits"
      amount={500} // $5 in cents
      currency="USD"
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      token={(token) => console.log(token)}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
