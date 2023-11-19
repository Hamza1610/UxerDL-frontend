import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/AuthComponents/SignUp";

import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/AuthComponents/SignIn";
import Library from "./components/BookList/Library";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/sign-up" exact Component={SignUp} />
          <Route path="/sign-in" exact Component={SignIn} />
          <Route path="/library" exact Component={Library} />
          <Route path="*" Component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
