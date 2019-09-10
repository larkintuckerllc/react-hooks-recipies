import React, { useCallback, useMemo, useState } from 'react';
import MemoHookThings from './MemoHookThings';

const getThings = (byId, ids) => ids.map(id => byId[id]);

const MemoHook = () => {
  const [value, setValue] = useState(0);
  const [byId, setById] = useState({});
  const [ids, setIds] = useState([]);
  const handleIncrementClick = useCallback(() => {
    setValue(prev => prev + 1);
  }, []);
  const handleAddClick = useCallback(() => {
    const id = Date.now().toString();
    const thing = {
      id,
      title: 'A Title',
    };
    setById(prevById => {
      return { ...prevById, [id]: thing };
    });
    setIds(prevIds => {
      return [...prevIds, id];
    });
  }, []);
  const things = useMemo(() => getThings(byId, ids), [byId, ids]);

  return (
    <div>
      <h3>Memo Hook</h3>
      <div>{value}</div>
      <div>
          <button onClick={handleIncrementClick}>Increment</button>
      </div>
      <div>
        <button onClick={handleAddClick}>Add</button>
      </div>
      <MemoHookThings things={things} />
    </div>
  );
}

export default MemoHook;
