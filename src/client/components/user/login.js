import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null
    };
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin(event) {
    event.preventDefault();
    const username = event.target.childNodes[0].value;
    const password = event.target.childNodes[1].value;
    fetch('api/checkLogin', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.wrong === 'wrongInput') {
          this.setState({ check: 'wrongInput' });
        }
      });
  }

  render() {
    if (this.state.check === 'wrongInput') {
      var wrongLogin = <div>Username/Password is incorrect</div>;
    } else {
      var wrongLogin = undefined;
    }
    return (
      <div>
        {wrongLogin}
        <h1>Login</h1>
        <form id="loginForm" onSubmit={this.checkLogin}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
