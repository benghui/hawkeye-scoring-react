import React from 'react';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null
    };
    this.checkRegister = this.checkRegister.bind(this);
  }

  checkRegister(event) {
    event.preventDefault();
    const username = event.target.childNode[1].value;
    const password = event.target.childNode[2].value;
    const email = event.target.childNode[0].value;
    fetch('/api/checkRegister', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        if (data.emailExist) {
          this.setState({ check: 'emailExist' });
        } else if (data.usernameExist) {
          this.setState({ check: 'usernameExist' });
        }
      });
  }

  render() {
    if (this.state.check === 'emailExist') {
      var exist = <div>This email has registered an account!</div>;
    } else if (this.state.check === 'usernameExist') {
      var exist = <div>This username is in use!</div>;
    } else {
      var exist = undefined;
    }
    return (
      <div>
        {exist}
        <h2>Register</h2>
        <form id="registerForm" onSubmit={this.checkRegister}>
          <input type="email" name="email" placeholder="email" />
          <input type="username" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
