import React from 'react';
import { inject, observer } from 'mobx-react';
import { ReviewItem } from './ReviewItem';

const ReviewsList = ({ currentRestaurantReviews }) => {
  const { length } = currentRestaurantReviews;
  const headerText = `${length} Review${length > 1 && 's'}`;
  return (
    <div className="reviews">
      <h2>{headerText}</h2>
      <ul className="reviews__list">
        {currentRestaurantReviews.map(review => (
          <li key={review.id}><ReviewItem review={review} /></li>
        ))}
      </ul>
    </div>
  );
};

export { ReviewsList };
export default inject(({ appState }) => ({
  currentRestaurantReviews: appState.currentRestaurantReviews,
}))(observer(ReviewsList));
