import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import { PropTypes } from 'mobx-react';
import { Status } from '../Status';

const RestaurantItem = ({
  restaurant: { name, image_url, rating, categories, price, is_closed },
}) => {
  const category = categories.length && categories[0].title;

  return (
    <div className="restaurants-list-item">
      <img alt={name} src={image_url} />
      <h2>{name}</h2>
      <p className="restaurants-list-item-rating">{rating}</p>
      <div className="restaurants-list-item__details">
        <div>
          {category} • {price}
        </div>
        <Status open={!is_closed} />
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
