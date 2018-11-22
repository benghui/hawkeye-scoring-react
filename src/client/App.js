import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/user/register.js';
import Login from './components/user/login.js';
import Target from './components/target/target.js';
import Trainings from './components/training/trainings.js';

import './app.css';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hawkeye Scoring</h1>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/target">Target</Link>
        <br />
        <Link to="/trainings">Trainings</Link>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/target" component={Target} />
          <Route path="/trainings" component={Trainings} />
        </Switch>
      </div>
    );
  }
}
