import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ProductListingPage from "./pages/ProductListing/ProductListingPage";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
     <Link to="./products">
     <button style={{padding:'10px' ,margin:'16px'}}>Click me for products page</button>
     </Link>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
