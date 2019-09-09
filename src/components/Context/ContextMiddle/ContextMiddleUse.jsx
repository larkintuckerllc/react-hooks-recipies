import React from 'react';
import { ThemeContext } from '../';

const ContextMiddleUse = () => (
  <ThemeContext.Consumer>
    {value => (
      <div
        style={{
          backgroundColor: value === 'light' ? 'white' : 'black',
          color: value === 'light' ? 'black' : 'white',
        }}>
        Context Middle Use
      </div>
    )}
  </ThemeContext.Consumer>
);

export default ContextMiddleUse;
