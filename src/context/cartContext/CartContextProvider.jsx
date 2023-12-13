import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  // State to manage the cart items
  const [cartItem, setCartItem] = useState([]);

  // Function to add items to the cart
  const addCartItem = (title, image, description, price, rating) => {
    // Check if the item already exists in the cart
    let findIndexItem = cartItem.findIndex((item) => item.title === title);

    // If the item exists, increment its quantity by 1
    if (findIndexItem !== -1) {
      const updatedCart = [...cartItem];
      updatedCart[findIndexItem].quantity += 1;
      setCartItem(updatedCart);
    }
    // If the item doesn't exist in the cart, add it with quantity 1
    else {
      const newItem = {
        title: title,
        image: image,
        description: description,
        price: price,
        rating: rating,
        quantity: 1,
      };
      setCartItem([...cartItem, newItem]);
    }
  };

  // Function to increase the quantity of a specific product in the cart
  const increaseQuantity = (productTitle) => {
    const updatedCart = cartItem.map((product) => {
      if (product.title === productTitle) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartItem(updatedCart);
  };

  // Function to decrease the quantity of a specific product in the cart
  const decreaseQuantity = (productTitle) => {
    const updatedCart = cartItem.map((product) => {
      if (product.title === productTitle && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartItem(updatedCart);
  };

  // Function to calculate the total number of items in the cart
  const totalItems = () => {
    const total = cartItem.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    return total;
  };

  return (
    <>
      {/* Provide the cart-related functions and data through CartContext */}
      <CartContext.Provider
        value={{
          cartItem,
          setCartItem,
          addCartItem,
          increaseQuantity,
          decreaseQuantity,
          totalItems,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
