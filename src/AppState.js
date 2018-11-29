import { action, observable, computed } from 'mobx';
import { YelpApi } from './YelpApi';
// import MOCK_RESTAURANTS from './fixtures/restaurants.json';
// import MOCK_RESTAURANT from './fixtures/restaurant.json';
// import MOCK_REVIEWS from './fixtures/reviews.json';

class AppState {
  yelpApi = new YelpApi();

  @observable restaurants = [];
  @observable currentRestaurantId = '';
  @observable currentRestaurantDetails;
  @observable currentRestaurantReviews;
  @observable filterByOpenNow = false;

  @action getRestaurants = location =>
    this.yelpApi
      .searchForRestaurants(location)
      .then(({ data }) => this.setRestaurants(data.businesses));
  @action setRestaurants = restaurants => {
    this.restaurants = restaurants;
  };

  @action setCurrentRestaurantId = currentRestaurantId => {
    this.currentRestaurantId = currentRestaurantId;
    this.setCurrentRestaurantDetails(null);
    this.setCurrentRestaurantReviews([]);
    this.yelpApi.getRestaurantDetails(currentRestaurantId).then(({data}) => {
      this.setCurrentRestaurantDetails(data);
    });
    this.yelpApi.getRestaurantReviews(currentRestaurantId).then(({data}) => {
      this.setCurrentRestaurantReviews(data.reviews);
    });
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
