import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

// Component
import SlideShow from "../UI/sliderShow/SlideShow";
import Cities from "../InfoCards/cities/Cities";
import Bookings from "../Bookings";
import Footer from "./Footer/Footer";

// CSS
import "./Header.css";
const Header = () => {
  const [setAuth, setAuthState] = useState(false);

  // Event handler
  const onLogHandler = () => {
    if (setAuth === false) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
    console.log(setAuth);
  };

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
            <Link to={setAuth ? "/home/booking" : "/home"} className="links">
              Book
            </Link>
          </li>
          <li>
            <Link to="/home/booking" className="links" onClick={onLogHandler}>
              {setAuth ? "Log Out" : "Log In"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Message based on auth status */}
      <div className="message">
        <h3 className={!setAuth ? "warning" : "greeting"}>
          {setAuth ? "Welcome to CYF Hotel" : "Please Log In"}
        </h3>
      </div>
      <Route path="/home" exact component={SlideShow} />
      <Switch>
        {setAuth ? <Route path="/home/Booking" component={Bookings} /> : null}
        <Route path="/home/Cities" component={Cities} />
        <Redirect from="/" to="/home" component={SlideShow} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Header;
