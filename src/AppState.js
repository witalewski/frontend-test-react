import { observable, action } from 'mobx';
import MOCK_RESTAURANTS from './fixtures/restaurants.json';

class AppState {
  @observable restaurants = MOCK_RESTAURANTS.businesses;

  @action setRestaurants = restaurants => {
    this.restaurants = restaurants;
  }

}

export { AppState };
