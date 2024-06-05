import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Hungry? Don't Be Glum, Let Us Fill Your Tum!</h2>
        <p>
          We're not just serving food, we're delivering pure deliciousness,
          handcrafted to satisfy your every hunger pang. Indulge in the
          extraordinary and let your taste buds embark on a journey they won't
          soon forget.
        </p>
        <a href="/#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
