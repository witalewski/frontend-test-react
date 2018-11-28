import React, { Fragment } from 'react';
import { Filters } from '../Filters';
import { RestaurantsList } from '../RestaurantsList';

const RestaurantsView = () => (
  <Fragment>
    <div className="hero">
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <Filters />
    <RestaurantsList />
  </Fragment>
);

export { RestaurantsView };
