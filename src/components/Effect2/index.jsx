import React, { Component }  from 'react';
import Effect2Post from './Effect2Post';

export default class Effect2 extends Component {
  state = {
    value: '1',
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>Effect 2</h3>
        <select onChange={this.handleChange} value={value}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
       </select>
       <Effect2Post id={value} />
      </div>
    );
  }

  handleChange = e => {
    this.setState({ value: e.target.value});
  };
};
