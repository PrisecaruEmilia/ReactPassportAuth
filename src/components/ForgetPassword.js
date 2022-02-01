import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class ForgetPassword extends Component {
  state = {
    email: '',
    message: '',
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
    };
    axios
      .post('/forget-password', data)
      .then((response) => {
        console.log(response);
        this.setState({ message: response.data.message });
        document.getElementById('forget-password-form').reset();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: error.response.data.message });
        document.getElementById('forget-password-form').reset();
      });
  };

  render() {
    let errorMessage = '';
    if (this.state.message) {
      errorMessage = (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>{this.state.message}</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Password</h3>
            <form onSubmit={this.formSubmit} id="forget-password-form">
              {errorMessage}
              <div className="form-group">
                <label htmlFor="emailForgetAccount">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="emailForgetAccount"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Forgot Account
              </button>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
