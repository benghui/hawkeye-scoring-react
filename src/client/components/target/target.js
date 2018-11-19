import React from 'react';
import { withRouter } from 'react-router-dom';

class Target extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: null
    };
  }

  handleClick(event) {}

  render() {
    return (
      <div>
        <h2>Target</h2>
      </div>
    );
  }
}

export default withRouter(Target);
