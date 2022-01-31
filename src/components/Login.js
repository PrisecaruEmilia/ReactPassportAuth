import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Login Acount</h3>
            <form>
              <div class="form-group">
                <label for="loginEmail">Email address</label>
                <input type="email" class="form-control" id="loginEmail" />
              </div>
              <div class="form-group">
                <label for="loginPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="loginPassword"
                />
              </div>

              <button type="submit" class="btn btn-primary btn-block">
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
