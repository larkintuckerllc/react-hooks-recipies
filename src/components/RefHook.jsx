import React, { useCallback, useRef } from 'react';

const RefHook = () => {
  const myRef = useRef();
  const handleClick = useCallback(() => {
    const node = myRef.current;
    node.play();
  }, []);

  return (
    <div>
       <h3>Ref Hook</h3>
       <div><button onClick={handleClick}>Play</button></div>
       <video ref={myRef} width="854" height="480" >
         <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
    </div>
  );
};

export default RefHook;
