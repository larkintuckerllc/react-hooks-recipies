import React, { useCallback, useState } from 'react';
import Effect2HookPost from './Effect2HookPost';

const Effect2Hook = () => {
  const [value, setValue] = useState('1');
  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h3>Effect 2 Hook</h3>
      <select onChange={handleChange} value={value}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
       </select>
       <Effect2HookPost id={value} />
    </div>
  );
}

export default Effect2Hook;
