import React from 'react';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null
    };
  }

  handleSomething(event) {

  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <input id="email" placeholder="email" />
          <input id="username" placeholder="username" />
          <input id="password" placeholder="password" />
          <input id="password_confirmation" placeholder="retype password" />
          <button onClick={this.handleSomething}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
