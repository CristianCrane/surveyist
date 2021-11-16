import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = props => {
    return (
        <StripeCheckout
            name='Surveyist'
            description='description prop text'
            panelLabel='Get credits'
            amount={500} // $5 in cents
            currency="USD"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={(token) => console.log(token)}
        />
    );
};

export default Payments;