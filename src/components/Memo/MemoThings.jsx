import PropTypes from 'prop-types';
import React, { memo } from 'react';

const MemoThings = ({ things }) => (
  <div>
    {things.map(thing => <div key={thing.id}>{thing.title}</div>)}
  </div>
);

MemoThings.propTypes = {
  things: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default memo(MemoThings);
