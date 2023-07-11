import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

import "./App.css";
import "./components/Home.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/api/" exact component={List} />
          <Route path="/api/search" exact component={Search} />
          <Route path="/api/upload" exact component={Upload} />
          <Route path="*" component={NotFound} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
