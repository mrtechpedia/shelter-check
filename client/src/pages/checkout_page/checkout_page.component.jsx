import React from "react";
import { useLocation } from "react-router";

import StripeCheckoutButton from "../../components/stripe_button/stripe_button";

import "./checkout_page.styles.css";

function CheckoutPage() {
  const location = useLocation();

  return (
    <div className="CheckoutPage">
      <div className="left">
        <h1 className="title">Checkout here !</h1>

        <table className="table">
          <tr className="checkout_header">
            <td>
              <div className="header-block">
                <span>Type</span>
              </div>
            </td>
            <td>
              <div className="header-block">
                <span>Description</span>
              </div>
            </td>

            <td>
              <div className="header-block">
                <span>Quantity</span>
              </div>
            </td>
            <td>
              <div className="header-block">
                <span>Quality</span>
              </div>
            </td>
            <td>
              <div className="header-block">
                <span>Price</span>
              </div>
            </td>
          </tr>

          <tr className="checkout_description">
            <td>
              <div className="description-block">
                <span>{location.state.type}</span>
              </div>
            </td>
            <td>
              <div className="description-block">
                <span>{location.state.outOfFour}</span>
              </div>
            </td>
            <td>
              <div className="description-block">
                <span>{location.state.quantity}</span>
              </div>
            </td>
            <td>
              <div className="description-block">
                <span>{location.state.quality}</span>
              </div>
            </td>
            <td>
              <div className="description-block">
                <span>{location.state.total}</span>
              </div>
            </td>
          </tr>
        </table>

        <div className="total">
          <span>TOTAL : ₹{location.state.total}</span>
        </div>

        <div className="pay_btn">
          <StripeCheckoutButton
            price={location.state.total}
            className="stripe_btn"
          />
        </div>
      </div>
      <div className="right">
        <div className="box">
          <h1 className="sc">Shelter Check</h1>
          <br></br>
          <p className="pp">We have three different premium quality services</p>
          <p className="pp">Normal Quality - Your Total</p>
          <p className="pp">Delux Quality - Your Total + 300</p>
          <p className="pp">Ultra Delux Quality - Your Total + 500</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
