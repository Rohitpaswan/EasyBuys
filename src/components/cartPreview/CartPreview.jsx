import "./cartPreview.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "../../context/cartContext/CartContext";

// CartPreview component displays a preview of a product in the cart
// Props:
// - title: Title of the product
// - image: Image URL of the product
// - price: Price of the product
// - quantity: Quantity of the product in the cart

const CartPreview = ({ title, image, price, quantity }) => {
  // Using CartContext to access functions to modify cart state
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart__item-wrapper">
      <div className="cart__items">
        {/* Product Image */}
        <div className="cart__img">
          <img src={image} alt="product-image" />
        </div>
        
        {/* Product Description */}
        <div className="cart__desc">
          <span>{title}</span>
          <span id="detail">₹{(price * quantity).toFixed(2)}</span>
        </div>
      </div>

      {/* Quantity Adjustment Buttons */}
      <div className="quantity">
        {/* Button to increase product quantity */}
        <div
          className="qunt-btn"
          onClick={() => {
            increaseQuantity(title);
          }}
        >
          <AddIcon style={{ position: "relative", top: "1px", left: "1px" }} />
        </div>

        {/* Quantity Display */}
        <div className="num">{quantity}</div>

        {/* Button to decrease product quantity */}
        <div
          className="qunt-btn"
          onClick={() => {
            decreaseQuantity(title);
          }}
        >
          <RemoveIcon style={{ position: "relative", top: "1px", left: "1px" }} />
        </div>
      </div>
    </div>
  );
};

// Type checking for props using PropTypes
CartPreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartPreview;
