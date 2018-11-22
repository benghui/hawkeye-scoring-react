import React from 'react';
import { withRouter } from 'react-router-dom';
import Display from './display';

class Target extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.setArrows = this.setArrows.bind(this);
  }

  setArrows(event) {
    console.log('arrow:', event.target);
    console.log('x-pos: ', event.screenX);
    console.log('y-pos: ', event.screenY);
    console.log(
      'bounding',
      ReactDOM.findDOMNode(this.refs.UniqueElementIdentifier).getBoundingClientRect()
    );
    this.setState({ x: event.screenX, y: event.screenY });
  }

  render() {
    return (
      <div >
        <h2>Target</h2>
        <div>
          <Display ref="UniqueElementIdentifier" />
        </div>
      </div>
    );
  }
}

export default withRouter(Target);
