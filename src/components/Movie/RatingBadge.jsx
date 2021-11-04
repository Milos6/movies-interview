import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingBadge = ({ rating, peopleRated }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className='card-footer-badge float-right badge badge-primary badge-pill parent'
         onMouseOver={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      <div className={"card-footer-badge float-right badge badge-secondary badge-pill child "+(hover?'hover':'')}>People rated: {peopleRated}</div>
      {rating}
    </div>);
};

RatingBadge.propTypes = {
  rating: PropTypes.number,
  peopleRated: PropTypes.number,
};

export default RatingBadge;
