import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Register Acount</h3>
            <form>
              <div class="form-group">
                <label for="registerName">User Name</label>
                <input type="text" class="form-control" id="registerName" />
              </div>
              <div class="form-group">
                <label for="registerEmail">Email address</label>
                <input type="email" class="form-control" id="registerEmail" />
              </div>
              <div class="form-group">
                <label for="registerPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="registerPassword"
                />
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                />
              </div>

              <button type="submit" class="btn btn-primary btn-block">
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
