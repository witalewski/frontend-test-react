import React from 'react';
import { inject, observer } from 'mobx-react';
import { ReviewItem } from './ReviewItem';

const ReviewsList = ({ currentRestaurantReviews }) => (
  <div className="reviews">
    <h2>{currentRestaurantReviews.length} Reviews</h2>
    <ul className="reviews__list">
      {currentRestaurantReviews.map(review => (
        <ReviewItem review={review} />
      ))}
    </ul>
  </div>
);

export { ReviewsList };
export default inject(({ appState }) => ({
  currentRestaurantReviews: appState.currentRestaurantReviews,
}))(observer(ReviewsList));
