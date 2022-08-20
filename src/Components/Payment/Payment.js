import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import "./Payment.css"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">

        <h1>
            Checkout(
                <Link to='/checkout' > {basket?.length} items</Link>
            )
        </h1>

        {/* Payment Section - Delivery Address */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 Lane, Khudiram Nagar</p>
            <p>Haldia,721657</p>
          </div>
        </div>

        {/* Payment Section - Review Item */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Section - Payment Method */}

        <div className="payment_section">
            <div className="payment_title">
            <h3>Payment Method</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
