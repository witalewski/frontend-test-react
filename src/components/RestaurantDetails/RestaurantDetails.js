import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Status } from '../Status';
import { StarRating } from '../StarRating';
import { Photos } from '../Photos';
import { ReviewsList } from '../ReviewsList';
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
    if (restaurant) {
       this.setState({
        restaurant,
        });
        setCurrentRestaurantId(restaurant.id);
    } else {
        window.location.pathname = "";
    }
  }

  getContent() {
    const { currentRestaurantDetails } = this.props;
    const { name, coordinates, photos, location, rating } = currentRestaurantDetails;
    const { categories, price, is_closed } = this.state.restaurant;

    const category = categories.length && categories[0].title;

    return (
      <div className="restaurants-details">
        <div className="restaurants-details__main">
          <h1>{name}</h1>
          <StarRating rating={rating} />
          <div className="restaurants-details-item__details">
            <div>
              {category} • {price}
            </div>
            <Status open={!is_closed} />
          </div>
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
        </div>
        <ReviewsList />
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
