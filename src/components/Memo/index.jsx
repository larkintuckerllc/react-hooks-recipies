import memoizeOne from 'memoize-one';
import React, { Component }  from 'react';
import MemoThings from './MemoThings';

export default class Memo extends Component {
  state = {
    byId: {},
    ids: [],
    value: 0,
  };

  render() {
    const { byId, ids, value } = this.state;
    const things = this.getThings(byId, ids);
    return (
      <div>
        <h3>Memo</h3>
        <div>{value.toString()}</div>
        <div>
          <button onClick={this.handleIncrementClick}>Increment</button>
        </div>
        <div>
          <button onClick={this.handleAddClick}>Add</button>
        </div>
        <MemoThings things={things} />
      </div>
    );
  }

  getThings = memoizeOne((byId, ids) => ids.map(id => byId[id]));

  handleIncrementClick = () => {
    this.setState(({ value: prevValue }) => ({
      value: prevValue+ 1, 
    }));
  };

  handleAddClick = () => {
    this.setState(({ byId: prevById, ids: prevIds }) => {
      const id = Date.now().toString();
      const thing = {
        id,
        title: 'A Title',
      };
      return ({
        byId: {...prevById, [id]: thing},
        ids: [...prevIds, id],
      });
    });
  };
};
