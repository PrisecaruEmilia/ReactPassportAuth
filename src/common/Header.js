import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../components/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgetPassword from '../components/ForgetPassword';
import Profile from '../components/Profile';

export class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forget" component={ForgetPassword} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
