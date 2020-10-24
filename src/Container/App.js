import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Component
import Bookings from "../Component/Bookings";
import Header from "../Component/Navigation/Header";
import Cities from "../Component/InfoCards/cities/Cities";
import Footer from "../Component/Navigation/Footer/Footer";
import SlideShow from "../Component/UI/sliderShow/SlideShow";

// Css
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Routers */}
      </div>
    </BrowserRouter>
  );
};

export default App;
