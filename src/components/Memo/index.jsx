import React, { Component }  from 'react';

export default class Memo extends Component {
  state = {
    byId: {},
    ids: [],
    value: 0,
  };

  render() {
    const { byId, ids, value } = this.state;
    const things = ids.map(id => byId[id]);
    return (
      <div>
        <h3>Memo</h3>
        <div>{value.toString()}</div>
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  }

  handleIncrementClick = () => {
    this.setState(({ value: prevValue }) => ({
      value: prevValue+ 1, 
    }));
  };
};
