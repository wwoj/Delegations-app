import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Picture from "../Objects/Logo_1.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header-div ">
        <nav className="header-class navbar navbar-dark bg-dark box-shadow">
          <img src={Picture} alt="logo" className="img-div" />

          <div className="nav-bar">
            <ul class="nav nav-tabs">
              <NavLink
                exact={true}
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                <li class="nav-item">Dom</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active"
                className="nav-link"
                to="/calculate"
              >
                <li class="nav-item">Kalkulator</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active"
                className="nav-link"
                to="/info"
              >
                <li class="nav-item">Informacje o delegacji</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active"
                className="nav-link"
                to="/miniGame"
              >
                <li class="nav-item">Snake Gra</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active"
                className="nav-link"
                to="/aboutMe"
              >
                <li class="nav-item">O mnie</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
