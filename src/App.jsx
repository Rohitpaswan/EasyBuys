import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListing/ProductListingPage";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="EasyBuys/products" element={<ProductListingPage />} />
        <Route path="EasyBuys/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
