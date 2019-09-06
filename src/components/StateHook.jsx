import React, { useCallback, useState } from 'react';

const StateHook = () => {
  const [value, setValue] = useState(0);
  const handleClick = useCallback(() => {
    setValue(value + 1);
  }, [setValue, value]);

  return (
    <div>
      <h3>State Hook</h3>
      <div>{value}</div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default StateHook;
