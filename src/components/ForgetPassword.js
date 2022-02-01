import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ForgetPassword extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Password</h3>
            <form>
              <div className="form-group">
                <label htmlFor="emailForgetAccount">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailForgetAccount"
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
