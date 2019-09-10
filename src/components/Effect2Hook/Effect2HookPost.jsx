import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

const Effect2HookPost = ({ id }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const execute = async () => {
      try {
        if (typeof id !== 'string' || id === '') {
          throw new Error();
        }
        setLoading(true);
        const response = await window.fetch(`${API}/${id}`);
        const json = await response.json();
        setPost(json);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    execute();
  }, [id]);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>{post.title}</div>
  );
};

Effect2HookPost.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Effect2HookPost;
