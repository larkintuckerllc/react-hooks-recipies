import React, { Component }  from 'react';

export default class Callback extends Component {
  render() {
    return (
      <div>
        <h3>Callback</h3>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }

  handleClick = () => {
    window.alert('CLICKED');
  }
}
