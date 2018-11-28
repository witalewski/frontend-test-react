import React from 'react';
import { shape, string } from 'prop-types';

const RestaurantItem = ({ restaurant: { name, image_url } }) => (
  <div className="restaurants-list-item">
    <img alt={name} src={image_url} />
    <h2>{name}</h2>
  </div>
);

RestaurantItem.propTypes = {
  restaurant: shape({
    name: string.isRequired,
    image_url: string.isRequired,
  }).isRequired,
};

export { RestaurantItem };
