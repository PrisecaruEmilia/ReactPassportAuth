import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
    loggedIn: false,
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post('/register', data)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // after login -> redirect to Profile

    if (this.state.loggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Register Acount</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="registerName">User Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="registerName"
                  required
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="registerEmail"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="registerPassword"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  className="form-control"
                  id="confirmPassword"
                  required
                  onChange={(e) => {
                    this.setState({ password_confirmation: e.target.value });
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
              <p className="mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
