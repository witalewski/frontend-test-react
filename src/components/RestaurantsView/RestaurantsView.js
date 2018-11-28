import React, { Component, Fragment } from 'react';
import { shape, string } from 'prop-types';
import { inject, observer, PropTypes } from 'mobx-react';

class RestaurantsView extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOrObservableArrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ).isRequired,
  };
  render() {
    return (
      <Fragment>
        <div className="hero">
          <h1>Restaurants</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="restaurants-list">
          <ul>
            {this.props.restaurants.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export { RestaurantsView };
export default inject(({ appState }) => ({
  restaurants: appState.restaurants,
  setRestaurants: appState.setRestaurants,
}))(observer(RestaurantsView));
