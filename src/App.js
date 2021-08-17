import "./App.css";
import "./style/media.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Project from "./view/Project";
import Header from "./view/Header";

function App() {
  return (
    <Router>
      <nav>
        <div className="container">
          <div className="logo">
            <img src="https://img.icons8.com/color/50/000000/services--v1.png" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/companies">Companies</Link>
              </li>
              <li className="active">
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/client">Client</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="clr"></div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/companies">
          <Header />
        </Route>
        <Route exact path="/about">
          <Header />
        </Route>
        <Route path="/services">
          <Header />
        </Route>
        <Route path="/client">
          <Header />
        </Route>
        <Route path="/news">
          <Header />
        </Route>
        <Route path="/contact">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
