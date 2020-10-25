import React, { useState } from "react";
import { Link, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Component
import SlideShow from "../UI/sliderShow/SlideShow";
import Cities from "../InfoCards/cities/Cities";
import Bookings from "../Bookings";
import Footer from "./Footer/Footer";
import Restaurant from "../Restaurant/Restaurant";
import Update from "../Form/UpdateForm/Update";
import { useAuth } from "../../Context/AuthContext";

// CSS
import "./Header.css";
const Header = () => {
  const [setAuth, setAuthState] = useState(true);
  const [setError, setErrorState] = useState("");

  // ref
  const history = useHistory();

  // Auth
  const { logout } = useAuth();

  async function logoutHandler() {
    setErrorState("");
    try {
      await logout();
      setAuthState(false);
      history.push("/login");
    } catch {
      setAuthState(true);
      setErrorState("Failed To Sign Out");
    }
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="light" expand={"sm" | "md" | "lg" | "xl"}>
        {/* <ul className="subNav"> */}
        <Navbar.Brand href="#home">
          <img
            src="https://image.flaticon.com/icons/svg/139/139899.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/loged-in/home" className="links">
              Home
            </Link>
          </Nav>
          <Nav>
            <Link to="/loged-in/home/cities" className="links">
              City
            </Link>
          </Nav>
          <Nav>
            <Link
              to={setAuth === false ? "/home" : "/loged-in/home/booking"}
              className="links"
            >
              Book
            </Link>
          </Nav>
          <Nav>
            <Link
              to={setAuth === false ? "/home" : "/loged-in/home/restaurant"}
              className="links"
            >
              Restaurant
            </Link>
          </Nav>
          <Nav>
            <Link
              to={
                setAuth === false ? "/login" : "/loged-in/home/update-profile"
              }
              className="links"
            >
              Profile
            </Link>
          </Nav>
          <Nav>
            <Link to="/login" className="links" onClick={logoutHandler}>
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Message based on auth status */}
      <div className="message">
        <h3 className={!setAuth ? "warning" : "greeting"}>
          {setAuth ? "Welcome to CYF Hotel" : "Please Log In"}
        </h3>
      </div>
      <Route path="/loged-in/home/" exact component={SlideShow} />
      <Switch>
        <Route path="/loged-in/home/Cities" component={Cities} />
        {setAuth === false ? (
          <Route path="/home" exact component={SlideShow} />
        ) : (
          <Route path="/loged-in/home/booking" exact component={Bookings} />
        )}
        {setAuth === false ? (
          <Route path="/home" exact component={SlideShow} />
        ) : (
          <Route
            path="/loged-in/home/restaurant"
            exact
            component={Restaurant}
          />
        )}
        {setAuth === false ? (
          <Route path="/home" exact component={SlideShow} />
        ) : (
          <Route
            path="/loged-in/home/update-profile"
            exact
            component={Update}
          />
        )}

        <Redirect from="/" exact to="/home" component={SlideShow} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Header;
