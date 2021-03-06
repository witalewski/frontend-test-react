import React from 'react';
import { Link } from 'react-router-dom';
import { Status } from '../Status';
import { StarRating } from '../StarRating';
import { convertToFriendlyRoute } from '../../utils';

const RestaurantItem = ({
  restaurant: { id, name, image_url, rating, categories, price, is_closed },
}) => {
  const category = categories.length && categories[0].title;

  return (
    <div className="restaurants-list-item">
      <img alt={name} src={image_url} />
      <h2>{name}</h2>
      <StarRating rating={rating} />
      <div className="restaurants-list-item__details">
        <div>
          {category} • {price}
        </div>
        <Status open={!is_closed} />
      </div>
      <div className="restaurants-list-item__learn-more-wrapper">
        <Link to={`/restaurant/${id}/${convertToFriendlyRoute(name)}`}>Learn more</Link>
      </div>
    </div>
  );
};

export { RestaurantItem };
