import React from 'react';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i<= 5; i++) {
        let className;
        if (i >= rating + 1) {
            className = "star--empty";
        } else if (i > rating ) {
            className = "star--half";
        } 
        stars.push(<use xlinkHref="#icon-star" key={`star-${i}-${className}`} x={(i-1)*36} y="0" className={className || ''} />)
    }
  return (
    <div>
      <div className="star-rating">
        <p>
          <svg class="star" viewBox="0 0 180 32">
            {stars}
          </svg>
        </p>
      </div>
      ({rating})
    </div>
  );
};

export { StarRating };
