import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { RestaurantItem } from './RestaurantItem';

class RestaurantsList extends Component {
  componentDidMount() {
    this.props.getRestaurants("Las%20Vegas");
  }
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
  restaurants: appState.filteredRestaurants,
  getRestaurants: appState.getRestaurants,
}))(observer(RestaurantsList));
