import React, { useCallback, useEffect, useRef, useState } from 'react';

const Ref2Hook = () => {
  const myRef = useRef(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    window.setInterval(() => {
      window.console.log(myRef.current);
    }, 1000);
  }, []);
  const handleClick = useCallback(() => {
    setCounter(prevCounter => {
      const nextCounter = prevCounter + 1;
      myRef.current = nextCounter;
      return nextCounter;
    });
  }, []);

  return (
    <div>
      <h3>Ref2 Hook</h3>
      <div>{counter.toString()}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Ref2Hook;
