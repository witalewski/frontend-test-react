import React, { Component } from 'react';
import { bool, number, shape, string } from 'prop-types';
import { inject, observer, PropTypes } from 'mobx-react';
import { RestaurantItem } from './RestaurantItem';

class RestaurantsList extends Component {
  static propTypes = {
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
  };
  render() {
    return (
      <div className="restaurants-list">
        <ul>
          {this.props.restaurants.map(restaurant => (
            <li key={restaurant.id}>
              <RestaurantItem restaurant={restaurant} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export { RestaurantsList };
export default inject(({ appState }) => ({
  restaurants: appState.restaurants,
  setRestaurants: appState.setRestaurants,
}))(observer(RestaurantsList));
