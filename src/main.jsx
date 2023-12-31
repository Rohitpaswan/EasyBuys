import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductContextProvider from "./context/productContext/ProductContextProvider.jsx";
import CartContextProvider from "./context/cartContext/CartContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>,
  </React.StrictMode>
);
