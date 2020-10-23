import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Header.css";
function Header() {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
        className="logo"
      />
      <ul className="subNav">
        <li>
          <Link to="./" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cities" className="links">
            City
          </Link>
        </li>
        <li>
          <Link to="./booking" className="links">
            Book
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
