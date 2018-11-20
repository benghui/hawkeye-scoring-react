import React from 'react';

import './display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.props = {

    };
    this.setArrows = this.setArrows.bind(this)
  }

  setArrows(event) {
      
  }

  render() {
    return (
      <div onClick={this.setArrows}>
        <div className="six-ring" />
        <div className="seven-ring" />
        <div className="eight-ring" />
        <div className="nine-ring" />
        <div className="ten-ring" />
        <div className="x-ring" />
      </div>
    );
  }
}

export default Display;
