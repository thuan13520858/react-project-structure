import React, { Component } from 'react';
import {NavLink} from "react-router-dom"; // sẽ thục hiện chuyển trang mà ko load lại trang

export default class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink exact activeClassName = "active" className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink activeClassName = "active" className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName = "active" className="nav-link" to="/list-movie">
                  ListMovie
                </NavLink>
                <NavLink activeClassName = "active" className="nav-link" to="/login">
                  Login
                </NavLink>
              </div>
            </div>
          </nav>
        );
    }
}
