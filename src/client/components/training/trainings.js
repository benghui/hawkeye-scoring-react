import React from 'react';
import { withRouter } from 'react-router-dom';
import './training.css';

class Trainings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      training: null,
      arrow1: ''
    };

    this.arrowInput = this.arrowInput.bind(this);
  }

  componentDidMount() {
    fetch('api/checkTraining')
      .then(res => res.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  arrowInput(event) {
    if (event.target.value != 'M') {
      this.setState({ arrow1: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <h2>Trainings</h2>
        {this.state.arrow1}
        <br />
        <input onChange={this.arrowInput} placeholder="Arrow Score" value={this.state.arrow1} />
      </div>
    );
  }
}

export default withRouter(Trainings);
