import React, { useCallback, useState } from 'react';

const StateHook = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleIncrementClick = useCallback(() => {
    setValue(prev => prev + 1);
  }, [setValue]);
  const handleIncrement2Click = useCallback(() => {
    setValue2(prev => prev + 1);
  }, [setValue2]);
  const handleResetClick = useCallback(() => {
    setValue(0);
  }, [setValue]);

  return (
    <div>
      <h3>State Hook</h3>
      <div>{value}</div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleResetClick}>Reset</button>
      <div>{value2}</div>
      <button onClick={handleIncrement2Click}>Increment2</button>
    </div>
  );
}

export default StateHook;
