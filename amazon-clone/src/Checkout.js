import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>

      <div>
        <h3>Hello, user</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
