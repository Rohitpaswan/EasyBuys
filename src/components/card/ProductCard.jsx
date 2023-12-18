import PropTypes from "prop-types";
import "./card.css";
import CartContext from "../../context/cartContext/CartContext";
import { useContext } from "react";


// ProductCard component represents a card displaying product information
// Props:
// - title: Title of the product
// - image: Image URL of the product
// - description: Description of the product
// - price: Price of the product
// - rating: Rating of the product

const ProductCard = ({ title, image, description, price, rating }) => {
  // Accessing CartContext to use cart-related functions
  const cartInfo = useContext(CartContext);
  const { addCartItem } = cartInfo;

  // Function to handle adding the current item to the cart
  const handleAddToCart = () => {
    // Call the addCartItem function from CartContext to add the current item to the cart
    addCartItem(title, image, description, price, rating);
  };

  return (
    <div className="card__wrapper">
      {/* Product Image */}
      <div className="card__img">
        <img src={image} alt="product" />
      </div>

      {/* Product Details */}
      <div className="detail">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="price">
          {/* Product Price */}
          <span>Price: &nbsp;</span>${price}
        </div>
        <div className="cart__btn">
          {/* Button to add the product to the cart */}
          <button className="add-cart__btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

// Type checking for props using PropTypes
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductCard;
