import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Component
import Header from "../Component/Navigation/Header";
import Signup from "../Component/Form/SignupForm/Signup";
import Login from "../Component/Form/LoginForm/Login";
import Reset from "../Component/Form/ResetForm/Reset";
import { AuthProvider } from "../Context/AuthContext";

// Css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/loged-in/home" component={Header} />
            <Route path="/forgot-password" exact component={Reset} />
            <Redirect from="/" to="/login" />
          </Switch>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
