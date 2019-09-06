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
        <div>{value}</div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState(({ value }) => ({
      value: value + 1, 
    }));
  }
}
