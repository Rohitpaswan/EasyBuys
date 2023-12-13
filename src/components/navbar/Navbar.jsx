import { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "../../context/cartContext/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  const [menu, setMenu] = useState(false);
  const handelMenuIcon = () => setMenu(!menu);
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="">
            {" "}
            <img src="../Image/logo.png" alt="logo" />
          </a>
        </div>
        <div className="search">
          <form action="">
            <input type="text" placeholder="search here" />
          </form>
        </div>
        <div className="icons">
          <AccountCircleIcon sx={{ m: "12px", color: "#fff" }} />
          <FavoriteIcon sx={{ m: "12px", color: "#fff" }} />
          <div className="item__quantity">{totalItems()}</div>
          <Link to="./cart">
            <ShoppingCartIcon sx={{ m: "12px", color: "#fff" }} />
            <span className="menu__span">Cart</span>
          </Link>

          <MenuIcon sx={{ m: "12px", color: "#fff" }} onClick={handelMenuIcon}>
            {" "}
          </MenuIcon>
        </div>
      </div>
      {menu && (
        <div className="links">
          <a href="">Women garment</a>
          <a href="">Men gramey</a>
          <a href="">Kid</a>
          <a href="">Boys shoes</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
