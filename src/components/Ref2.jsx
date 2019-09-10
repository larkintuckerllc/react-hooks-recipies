import React, { Component } from 'react';

export default class Ref2 extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    window.setInterval(this.handleInterval, 1000);
  }

  render() {;
    const { counter } = this.state;
    return (
      <div>
        <h3>Ref2</h3>
        <div>{counter.toString()}</div>
        <button onClick={this.handleClick}>Increment</button> 
      </div>
    );
  }

  handleClick = () => {
    this.setState(({ counter: prevCounter }) => ({ counter: prevCounter + 1 }));
  };

  handleInterval = () => {
    const { counter } = this.state;
    window.console.log(counter);
  };
}
