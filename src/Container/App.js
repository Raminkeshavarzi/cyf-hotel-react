import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Component
import Bookings from "../Component/Bookings";
import Header from "../Component/Navigation/Header";
import Cities from "../Component/InfoCards/cities/Cities";
import Footer from "../Component/Navigation/Footer/Footer";

// Css
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Routers */}
        <Switch>
          <Route path="./" exact component={(Header, Footer)} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Booking" component={Bookings} />
        </Switch>
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
