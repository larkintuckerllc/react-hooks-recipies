import React, { Component }  from 'react';

export default class State extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>State</h3>
        <div>{value.toString()}</div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }

  handleIncrementClick = () => {
    this.setState(({ value }) => ({
      value: value + 1, 
    }));
  };

  handleResetClick = () => {
    this.setState({ value: 0 });
  };
};
