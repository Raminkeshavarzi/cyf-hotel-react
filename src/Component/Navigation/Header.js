import React from "react";

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
          <a href="./" className="links">
            Home
          </a>
        </li>
        <li>
          <a href="/cities" className="links">
            City
          </a>
        </li>
        <li>
          <a href="./booking" className="links">
            Book
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
