import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { RestaurantItem } from './RestaurantItem';

class RestaurantsList extends Component {
  render() {
    return (
      <div className="restaurants-list">
        <ul>
          {this.props.filteredRestaurants.map(restaurant => (
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
  filteredRestaurants: appState.restaurants,
  setRestaurants: appState.setRestaurants,
}))(observer(RestaurantsList));
