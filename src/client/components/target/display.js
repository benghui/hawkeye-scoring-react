import React from 'react';
import ReactDOM from 'react-dom';

import './display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.setArrows = this.setArrows.bind(this);
  }

  // componentDidMount() {
  //   const n = ReactDOM.findDOMNode(this);
  //   console.log('offset', n.offsetTop);
  // }

  setArrows(event) {
    console.log('arrow:', event.target);
    console.log('x-pos: ', event.screenX);
    console.log('y-pos: ', event.screenY);
    console.log('x-client: ', event.clientX);
    console.log('y-client: ', event.clientY);
    console.log('x-offset: ', event.nativeEvent.offsetX);
    console.log('y-offset: ', event.nativeEvent.offsetY);

    this.setState({ x: event.screenX, y: event.screenY });
  }

  render() {
    return (
      <div className="container" onClick={this.setArrows}>
        <div className="miss-ring">
          <div className="one-ring">
            <div className="two-ring">
              <div className="three-ring">
                <div className="four-ring">
                  <div className="five-ring">
                    <div className="six-ring">
                      <div className="seven-ring">
                        <div className="eight-ring">
                          <div className="nine-ring">
                            <div className="ten-ring">
                              <div className="x-ring">
                                <div className="spider">
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
