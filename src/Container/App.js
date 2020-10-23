import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Component
import Bookings from "../Component/Bookings";
import Header from "../Component/Navigation/Header";
import Cities from "../Component/InfoCards/cities/Cities";
import Footer from "../Component/Navigation/Footer/Footer";

// Css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cities />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
