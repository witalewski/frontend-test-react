import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
import { Status } from '../Status';
import { StarRating } from '../StarRating';
import { convertToFriendlyRoute } from '../../utils';

const RestaurantDetails = ({
  match: {
    params: { urlFriendlyName },
  },
  restaurants,
}) => {
  const {
    categories,
    name,
    image_url,
    rating,
    price,
    is_closed,
  } = restaurants[0];
  const category = categories.length && categories[0].title;

  return (
    <div className="restaurants-details">
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
        <Link to={`/${convertToFriendlyRoute(name)}`}>Learn more</Link>
      </div>
    </div>
  );
};

RestaurantDetails.propTypes = {
  restaurants: PropTypes.arrayOrObservableArrayOf(
    shape({
      name: string,
      image_url: string,
      rating: number,
      categories: PropTypes.arrayOrObservableArrayOf(
        shape({
          title: string,
        })
      ),
      price: string,
      is_closed: bool,
    }).isRequired
  ).isRequired,
  match: shape({
    params: shape({
      urlFriendlyName: string,
    }),
  }).isRequired,
};

export { RestaurantDetails };
export default inject(({ appState }) => ({
  restaurants: appState.restaurants,
}))(observer(RestaurantDetails));
