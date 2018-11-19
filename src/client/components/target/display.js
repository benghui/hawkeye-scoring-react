import React from 'react';

import './display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
