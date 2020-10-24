import React from "react";
import { Link, Switch, Route } from "react-router-dom";

// Component
import SlideShow from "../UI/sliderShow/SlideShow";
import Cities from "../InfoCards/cities/Cities";
import Bookings from "../Bookings";
import Footer from "./Footer/Footer";

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
      <div className="subNav">
        <ul className="subNav">
          <li>
            <Link to="/home" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home/cities" className="links">
              City
            </Link>
          </li>
          <li>
            <Link to="/home/booking" className="links">
              Book
            </Link>
          </li>
        </ul>
      </div>
      <Route path="/home" exact component={SlideShow} />
      <Switch>
        <Route path="/home/Cities" component={Cities} />
        <Route path="/home/Booking" component={Bookings} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Header;
