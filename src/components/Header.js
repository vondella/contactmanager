import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {this.props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="">
                  <i className="fas fa-home" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact/add"
                  className="nav-link"
                  activeClassName=""
                >
                  <i className="fas fa-plus" />
                  Add
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="">
                  <i className="fas fa-question" />
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "React"
};

export default Header;
