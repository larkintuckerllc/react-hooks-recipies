import PropTypes from 'prop-types';
import React, { memo } from 'react';

const MemoHookThings = ({ things }) => (
  <div>
    {things.map(thing => <div key={thing.id}>{thing.title}</div>)}
  </div>
);

MemoHookThings.propTypes = {
  things: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default memo(MemoHookThings);
