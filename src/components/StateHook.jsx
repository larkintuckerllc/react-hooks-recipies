import React, { useCallback, useState } from 'react';

const StateHook = () => {
  const [value, setValue] = useState(0);
  const handleIncrementClick = useCallback(() => {
    setValue(value => value + 1);
  }, [setValue]);
  const handleResetClick = useCallback(() => {
    setValue(0);
  }, [setValue]);

  return (
    <div>
      <h3>State Hook</h3>
      <div>{value}</div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default StateHook;
