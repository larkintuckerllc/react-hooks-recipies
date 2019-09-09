import React, { useContext } from 'react';
import { ThemeContext } from '../';

const ContextHookMiddleUse = () =>  {
  const value = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: value === 'light' ? 'white' : 'black',
        color: value === 'light' ? 'black' : 'white',
      }}>
      Context Middle Use
    </div>
  );
};

export default ContextHookMiddleUse;
