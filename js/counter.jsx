import React from 'react';
import '../css/reset_button.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
    console.log('Counter reset')
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Counter: ', this.state.number)
      this.setState({number: this.state.number + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let classes = 'reset';

    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleReset} className={classes}>Reset counter</button>
      </div>
    )
  }
}

