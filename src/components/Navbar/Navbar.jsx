import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [searchInput, setSearchInput] = useState("");

  const { getTotalCartAmount, cartItems, getTotalItemsInCart, setSearchQuery } =
    useContext(StoreContext);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Search...");

  const placeholders = ["Search...", "Find...", "Explore...", "Discover..."];
  let currentPlaceholderIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder(placeholders[currentPlaceholderIndex]);
      currentPlaceholderIndex =
        (currentPlaceholderIndex + 1) % placeholders.length;
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setSearchQuery(event.target.value);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo2} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mob-app")}
          className={menu === "mob-app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="box">
          <input
            type="text"
            placeholder={currentPlaceholder}
            className="search_bar placeholder_animation"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <img src={assets.search_icon} alt="Search Icon" />
        </div>
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="cartNumber">
            {getTotalItemsInCart() > 0 ? getTotalItemsInCart() : "0"}
          </div>
        </Link>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
