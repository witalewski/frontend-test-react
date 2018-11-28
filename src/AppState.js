import { observable, action } from 'mobx';
import MOCK_RESTAURANTS from './fixtures/restaurants.json';
import MOCK_RESTAURANT from './fixtures/restaurant.json';

class AppState {
  @observable restaurants = MOCK_RESTAURANTS.businesses;
  @observable currentRestaurantId = '';
  @observable currentRestaurantDetails;

  @action setRestaurants = restaurants => {
    this.restaurants = restaurants;
  }

  @action setCurrentRestaurantId = currentRestaurantId => {
    this.currentRestaurantId = currentRestaurantId;
    this.setCurrentRestaurantDetails(null);
    // TODO fetch data
    this.setCurrentRestaurantDetails(MOCK_RESTAURANT);

  }

  @action setCurrentRestaurantDetails = currentRestaurantDetails => {
    this.currentRestaurantDetails = currentRestaurantDetails;
  }

}

export { AppState };
