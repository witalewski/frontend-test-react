import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Status } from '../Status';
import { StarRating } from '../StarRating';
import { convertToFriendlyRoute } from '../../utils';

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
    const {
      categories,
      name,
      image_url,
      rating,
      price,
      is_closed,
    } = this.state.restaurant;

    const category = categories.length && categories[0].title;

    return (
      <div className="restaurants-details">
        <h1>{name}</h1>
        <img alt={name} src={image_url} />
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
    return this.state ? this.getContent() : null;
  }
}

export { RestaurantDetails };
export default inject(({ appState }) => ({
  restaurants: appState.restaurants,
  setCurrentRestaurantId: appState.setCurrentRestaurantId,
  currentRestaurantDetails: appState.currentRestaurantDetails,
}))(observer(RestaurantDetails));
