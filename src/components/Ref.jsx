import React, { Component, createRef } from 'react';

export default class Ref extends Component {
  myRef = createRef();

  render() {
    return (
      <div>
        <h3>Ref</h3>
        <div><button onClick={this.handleClick}>Play</button></div>
        <video ref={this.myRef} width="854" height="480" >
          <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
           Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  handleClick = () => {
    const node = this.myRef.current;
    node.play();
  };
}
