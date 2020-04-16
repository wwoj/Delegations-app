import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Picture from "../Objects/Logo_1.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <nav className="header-class">
          <img src={Picture} alt="logo" className="img-div" />

          <div className="nav-bar">
            <NavLink exact={true} activeClassName="is-active" to="/">
              <button>Home</button>
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/calculate">
              <button>Kalkulator</button>
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/info">
              <button>Wartości diety</button>
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/miniGame">
              <button>miniGame</button>
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/aboutMe">
              <button>About me</button>
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
