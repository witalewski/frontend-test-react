import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import { PropTypes } from 'mobx-react';

const RestaurantItem = ({
  restaurant: { name, image_url, rating, categories, price, is_closed },
}) => {
    const category = categories.length && categories[0].title;
    const status = is_closed ? 'Closed' : 'Open now';

    return (
  <div className="restaurants-list-item">
    <img alt={name} src={image_url} />
    <h2>{name}</h2>
    <p>{rating}</p>
    <div className="restaurants-list-item__details">
        <span>{category} • {price}</span>
        <span>{status}</span>
    </div>
  </div>
);
    }

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
