import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "../../context/cartContext/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="">
            {" "}
            {/* <img src="../Image/logo.png" alt="logo" /> */}
          </a>
        </div>
        <div className="search">
          <form action="">
            <input type="text" placeholder="search here" />
          </form>
        </div>
        <div className="login__div">
        <button className="login__btn">Login</button>
        <AccountCircleIcon sx={{ m: "12px", color: "#fff", fontSize:"28px" }} />
        </div>
        <div className="icons">     
          <FavoriteIcon sx={{ m: "12px", color: "#fff" }} />
          <div className="item__quantity">{totalItems()}</div>
          <Link to="./cart">
            <ShoppingCartIcon sx={{ m: "12px", color: "#fff" }} />
            <span className="menu__span">Cart</span>
          </Link>
          <MenuIcon  sx={{ m: "12px", color: "#fff" }}/>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
