import React, { Component } from 'react';
import axios from 'axios';

export class Reset extends Component {
  state = {
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post('/reset-password', data)
      .then((response) => {
        console.log(response);
        this.setState({ message: response.data.message });
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

    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Reset Acount</h3>
            <form onSubmit={this.formSubmit}>
              {errorMessage}
              <div className="form-group">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  type="text"
                  name="token"
                  className="form-control"
                  id="pinCode"
                  required
                  onChange={(e) => {
                    this.setState({ token: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recoveryEmail">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="recoveryEmail"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="newPassword"
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
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
