import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import { PropTypes } from 'mobx-react';

const RestaurantItem = ({
  restaurant: { name, image_url, rating, categories, price, is_closed },
}) => {
  const category = categories.length && categories[0].title;
  const status = (
    <span>
      <span
        className={`restaurants-list-item__status-indicator restaurants-list-item__status-indicator--${
          is_closed ? 'closed' : 'open'
        }`}
      >
        ⬤
      </span>
      {is_closed ? 'Closed' : 'Open now'}
    </span>
  );

  return (
    <div className="restaurants-list-item">
      <img alt={name} src={image_url} />
      <h2>{name}</h2>
      <p className="restaurants-list-item-rating">{rating}</p>
      <div className="restaurants-list-item__details">
        <span>
          {category} • {price}
        </span>
        {status}
      </div>
      <div className="restaurants-list-item__learn-more-wrapper">
        <button>Learn more</button>
      </div>
    </div>
  );
};

RestaurantItem.propTypes = {
  restaurant: shape({
    name: string,
    image_url: string,
    rating: number,
    categories: PropTypes.arrayOrObservableArrayOf(
      shape({
        title: string,
      })
    ),
    price: string,
  }).isRequired,
  is_closed: bool,
};

export { RestaurantItem };
