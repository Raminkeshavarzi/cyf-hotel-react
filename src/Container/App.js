import React from "react";
import { BrowserRouter } from "react-router-dom";
// Component
import Header from "../Component/Navigation/Header";

// Css
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
