import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Status } from '../Status';
import { StarRating } from '../StarRating';
import { Photos } from '../Photos';
import {
  convertToFriendlyRoute,
  getGoogleMapsLinkForRestaurant,
  getStaticMapForLocation,
} from '../../utils';

class RestaurantDetails extends Component {
  componentDidMount() {
    const {
      match: {
        params: { urlFriendlyName },
      },
      restaurants,
      setCurrentRestaurantId,
    } = this.props;

    const restaurant = toJS(
      restaurants.find(
        ({ name }) => convertToFriendlyRoute(name) === urlFriendlyName
      )
    );
    this.setState({
      restaurant,
    });
    setCurrentRestaurantId(restaurant.id);
  }

  getContent() {
    const { currentRestaurantDetails } = this.props;
    const { name, coordinates, photos, location } = currentRestaurantDetails;
    const { categories, rating, price, is_closed } = this.state.restaurant;

    const category = categories.length && categories[0].title;

    return (
      <div className="restaurants-details">
        <h1>{name}</h1>
        <div className="restaurant-details__photos">
          <Photos
            photos={[
              {
                url: getGoogleMapsLinkForRestaurant(currentRestaurantDetails),
                src: getStaticMapForLocation(coordinates),
              },
              ...photos.map(photo => ({ src: photo })),
            ]}
          />
        </div>
        <div className="restaurants-details__address">
          {location.display_address.join(', ')}
        </div>
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
  }
  render() {
    return this.state && this.props.currentRestaurantDetails
      ? this.getContent()
      : null;
  }
}

export { RestaurantDetails };
export default inject(({ appState }) => ({
  restaurants: appState.restaurants,
  setCurrentRestaurantId: appState.setCurrentRestaurantId,
  currentRestaurantDetails: appState.currentRestaurantDetails,
}))(observer(RestaurantDetails));
