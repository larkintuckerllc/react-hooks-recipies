import React, { useCallback } from 'react';

const CallbackHook = () => {
  const handleClick = useCallback(() => {
    window.alert('CLICKED');
  }, []);

  return (
    <div>
      <h3>Callback Hook</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default CallbackHook;
