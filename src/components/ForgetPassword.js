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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Password</h3>
            <form onSubmit={this.formSubmit}>
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
