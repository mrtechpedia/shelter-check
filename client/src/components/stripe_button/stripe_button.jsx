import React from "react";
import { useHistory } from "react-router";

import StripeCheckout from "react-stripe-checkout";

import brandlogo from "../../assets/home.png";

const StripeCheckoutButton = ({ price }) => {
  const history = useHistory();
  const priceForStripe = price * 0.014 * 100;
  const publishableKey =
    "pk_test_51IEIIuK75TIfIhw18PxVWiXWKiutRsXe1u92OIgWb8LlA672XgiS4hZNzohnc3t6jVBlZV6GXPUA680CLG9AEs08008Pp2UENr";

  const onToken = (token) => {
    alert("Payment Successful!");
    history.push("/landing");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shelter Check Ltd."
      billingAddress
      shippingAddress
      image={brandlogo}
      description={`Your Total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
