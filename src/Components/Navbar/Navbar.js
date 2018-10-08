import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Signin from "../Signin&up/Signin";
import Signup from "../Signin&up/Signup";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="bg-transparent navbar navbar-expand-lg navbar-light ">
            <span className="navbar-brand active">
              <Link to={"/"}>Keegaa</Link>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to={"/About"}>About</Link>
                  </span>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <span className="dropdown-item">Action</span>
                    <span className="dropdown-item">Another action</span>
                    <div className="dropdown-divider" />
                    <span className="dropdown-item">Something else here</span>
                  </div>
                </li>
                <li className="nav-item">
                  <span className="nav-link ">Blog</span>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2">
                  Search
                </button>
              </form>
              <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2">
                <Link to={"/Signin"}>SignIn</Link>
              </button>
              <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2">
                <Link to={"/Signup"}>SignUp</Link>
              </button>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
