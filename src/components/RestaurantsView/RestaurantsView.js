import React from 'react';
import { Filters } from '../Filters';
import { RestaurantsList } from '../RestaurantsList';

const RestaurantsView = () => (
  <div className="restaurants-view">
    <div className="hero">
      <h1>Restaurants</h1>
    </div>
    <Filters />
    <RestaurantsList />
  </div>
);

export { RestaurantsView };
