import React from "react";
import "./App.css";
import "./App.min.css";
import "./App.min.mobile.css";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Search from "./components/Search";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/api/" exact Component={List} />
          <Route path="/api/search" exact Component={Search} />
          <Route path="/api/upload" exact Component={Upload} />
          <Route path="*" Component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
