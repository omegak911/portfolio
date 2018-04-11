import React from 'react';

import './Stars.css';

const Stars = ({ solidStars }) => {
  const emptyStars = 5 - solidStars;
  return (
    <div>
      {[...Array(solidStars)].map((star, index) => <span className="solidStar">&#x2605;</span>)}
      {[...Array(emptyStars)].map((star, index) => <span className="emptyStar">&#x2606;</span>)}
    </div>
  )
}
export default Stars;