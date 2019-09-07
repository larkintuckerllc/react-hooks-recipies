import React, { useEffect, useState } from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

const EffectHook = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const execute = async () => {
      try {
        const response = await window.fetch(API);
        const json = await response.json();
        setPosts(json);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    execute();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h3>Effect Hook</h3>
      <div style={{ height: 200, overflow: 'auto' }}>
        {posts.map(post => <div key={post.id}>{post.title}</div>)}
      </div>
    </div>
  );
}

export default EffectHook;
