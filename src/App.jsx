import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListing/ProductListingPage";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
