import React, { createContext, useCallback, useState } from 'react';
import ContextHookMiddle from './ContextHookMiddle';

export const ThemeContext = createContext('light');

const ContextHook = () => {
  const [theme, setTheme] = useState('light');
  const handleClick = useCallback(() => {
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      return nextTheme;
    });
  }, []);

  return (
    <div>
      <h3>Context Hook</h3>
      <button onClick={handleClick}>Toggle Theme</button>
      <ThemeContext.Provider value={theme}>
        <ContextHookMiddle />
      </ThemeContext.Provider>
    </div>
  );
};

export default ContextHook;
