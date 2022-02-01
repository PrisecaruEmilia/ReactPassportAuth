import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../components/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgetPassword from '../components/ForgetPassword';
import Profile from '../components/Profile';
import axios from 'axios';

export class Header extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get('/user')
      .then((response) => {
        console.log(response);
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} setUser={this.setUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              component={() => (
                <Login user={this.state.user} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/register"
              component={() => (
                <Register user={this.state.user} setUser={this.setUser} />
              )}
            />
            <Route exact path="/forget" component={ForgetPassword} />
            <Route
              exact
              path="/profile"
              component={() => <Profile user={this.state.user} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
