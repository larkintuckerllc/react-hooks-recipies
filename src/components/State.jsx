import React, { Component }  from 'react';

export default class State extends Component {
  state = {
    value: 0,
    value2: 0,
  };

  render() {
    const { value, value2 } = this.state;
    return (
      <div>
        <h3>State</h3>
        <div>{value.toString()}</div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleResetClick}>Reset</button>
        <div>{value2.toString()}</div>
        <button onClick={this.handleIncrement2Click}>Increment2</button>
      </div>
    );
  }

  handleIncrementClick = () => {
    this.setState(({ value }) => ({
      value: value + 1, 
    }));
  };

  handleIncrement2Click = () => {
    this.setState(({ value2 }) => ({
      value2: value2 + 1, 
    }));
  };

  handleResetClick = () => {
    this.setState({ value: 0 });
  };
};
