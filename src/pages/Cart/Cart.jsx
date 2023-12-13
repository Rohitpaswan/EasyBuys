import "./cart.css";
import CartPreview from "../../components/cartPreview/CartPreview";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/cartContext/CartContext";

import SecurityIcon from '@mui/icons-material/Security';
const Cart = () => {
  const { cartItem, totalItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    // Calculate subtotal when cartItem changes
    const produtcTotalPrice = cartItem.reduce((accumulator, product) => {
      return parseFloat((accumulator + product.quantity * product.price).toFixed(2));
    }, 0);
    setSubTotal(produtcTotalPrice);

    const taxPrice = 0.18;
    const taxAmount = parseFloat((taxPrice * subTotal).toFixed(2)); //Total Taxable ammount
    setTax(taxAmount);

    if (produtcTotalPrice >= 350) setShippingCost(0);
    else setShippingCost(parseInt(50));
    
    setTotal((shippingCost + taxAmount + subTotal).toFixed(2)); // Net ammount to be paid
  }, [cartItem, shippingCost, subTotal]);

  return (
    <div className="cart__wrapper">
      {/* Cart-Item list */}
      <div className="left__side">
        <div className="cart__header">
          <span> Items({totalItems()})</span>
        </div>

        <div className="cart__address">
          <span>Enter Your Address</span>
          <button>Enter Delivery Pin-Code</button>
        </div>
        {/* Item-box */}
        <div className="cart-scroll">
          {/* Single item */}      
   {cartItem.map((product, index) => (
            <CartPreview
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
              {...cartItem}
            />
          ))}    
        </div>
        <div className="order__div">
          <button>Place Order</button>
        </div>
      </div>

      {/* Checkout-box */}

      <div className="right__side">
        <div className="checkout">
            <span className="checkout__title">Price Details</span>
            <div className="checkout__price">
              <span className="price">Price</span>
              <span className="price">₹{subTotal}</span>
            </div>
            <div className="checkout__price">
              <span className="price">Total Tax</span>
              <span className="price">₹{tax}</span>
            </div>
            <div className="checkout__price">
              <span>Delivery Charge</span>
              <span id="delivey__charge">₹{shippingCost}</span>
            </div>
            <div className="checkout__price checkout__price2">
              <h2 className="total__amount">Total Amount</h2>
              <h2 className="total__amount">₹{total}</h2>
            </div>
        </div>
        <div className="checkout__text">
        <SecurityIcon/>
         <div>
           Safe and secure Payment.Easy returns.
          100% Authentic products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


