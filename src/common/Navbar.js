import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  // state = {
  //   logout: false,
  // };

  logout = () => {
    localStorage.removeItem('token');
    this.props.setUser(null);
  };

  render() {
    let buttons;
    let profile;
    if (localStorage.getItem('token')) {
      buttons = (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.logout}>
              Logout
            </Link>
          </li>
        </ul>
      );
      profile = (
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
      );
    } else {
      buttons = (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Custom Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {profile}
            </ul>
            <span className="navbar-text">{buttons}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
