import React from 'react';
import dayjs from 'dayjs';
import { StarRating } from '../StarRating';
export const ReviewItem = ({ review }) => {
  const {
    text,
    time_created,
    rating,
    user: { name, image_url, profile_url },
  } = review;

  const image = image_url ? (
    <img className="review-item__author-image" alt={name} src={image_url} />
  ) : (
    <div className="review-item__author-image-placeholder" />
  );

  return (
    <div className="review-item">
      <div className="review-item__author">
        {image}
        <div>
          <h3>{name}</h3>
          <p className="review-item__date">
            {dayjs(time_created).format('M/D/YYYY')}
          </p>
        </div>
      </div>
      <div className="review-item__content">
      <StarRating rating={rating}/>
      <p>{text}</p>
      </div>
    </div>
  );
};
