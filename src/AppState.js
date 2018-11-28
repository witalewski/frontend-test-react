import { action, observable, computed } from 'mobx';
import MOCK_RESTAURANTS from './fixtures/restaurants.json';
import MOCK_RESTAURANT from './fixtures/restaurant.json';
import MOCK_REVIEWS from './fixtures/reviews.json';

class AppState {
  @observable restaurants = MOCK_RESTAURANTS.businesses;
  @observable currentRestaurantId = '';
  @observable currentRestaurantDetails;
  @observable currentRestaurantReviews;
  @observable filterByOpenNow = false;

  @action setRestaurants = restaurants => {
    this.restaurants = restaurants;
  };

  @action setCurrentRestaurantId = currentRestaurantId => {
    this.currentRestaurantId = currentRestaurantId;
    this.setCurrentRestaurantDetails(null);
    this.setCurrentRestaurantReviews(null);
    // TODO fetch data
    this.setCurrentRestaurantDetails(MOCK_RESTAURANT);
    this.setCurrentRestaurantReviews(MOCK_REVIEWS.reviews);
  };

  @action setCurrentRestaurantDetails = currentRestaurantDetails => {
    this.currentRestaurantDetails = currentRestaurantDetails;
  };

  @action setCurrentRestaurantReviews = currentRestaurantReviews => {
    this.currentRestaurantReviews = currentRestaurantReviews;
  };

  @action setFilterByOpenNow = filterByOpenNow => {
    this.filterByOpenNow = filterByOpenNow;
  };

  @computed get filteredRestaurants() {
    return this.filterByOpenNow
      ? this.restaurants.filter(r => !r.is_closed)
      : this.restaurants;
  }
}

export { AppState };
