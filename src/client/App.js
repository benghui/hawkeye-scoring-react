import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/user/register.js';
import Target from './components/target/target.js';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hawkeye Scoring</h1>
        <Link to="/register">Register</Link>
        <Link to="/target">Target</Link>

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/target" component={Target} />
        </Switch>
      </div>
    );
  }
}
