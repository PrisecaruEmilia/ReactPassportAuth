import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
export class Login extends Component {
  state = {
    email: '',
    password: '',
    message: '',
    loggedIn: false,
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('/login', data)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.setState({ message: response.data.message });
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    let errorMessage = '';
    if (this.state.message) {
      errorMessage = (
        <div class="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      );
    }

    if (localStorage.getItem('token')) {
      return <Redirect to="/profile" />;
    }

    // after login -> redirect to Profile

    if (this.state.loggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Login Acount</h3>
            <form onSubmit={this.formSubmit}>
              {errorMessage}

              <div className="form-group">
                <label htmlFor="loginEmail">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="loginEmail"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="loginPassword"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <p className="mt-3">
                <Link to="/forget">Forget my password</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
