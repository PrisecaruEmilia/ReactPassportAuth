import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../components/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
