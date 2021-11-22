import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { addUserCredits, selectUser } from "../auth/authSlice";

const Payments = () => {
  const user = useSelector(selectUser);

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
      <a className="button" style={{ marginRight: "8px" }}>
        <span>{user.credits} credits</span>
        <span className="icon">
          <i className="fas fa-plus-circle"></i>
        </span>
      </a>
    </StripeCheckout>
  );
};

export default Payments;
