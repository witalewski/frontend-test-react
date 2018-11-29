import { action, observable, computed } from 'mobx';
import { YelpApi } from './YelpApi';
import { Set } from 'core-js';

class AppState {
  yelpApi = new YelpApi();

  @observable restaurants = [];
  @observable currentRestaurantId = '';
  @observable currentRestaurantDetails;
  @observable currentRestaurantReviews;
  @observable filterByOpenNow = false;
  @observable filterByCategory = '';
  @observable filterByPrice = '';

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
    this.yelpApi.getRestaurantDetails(currentRestaurantId).then(({ data }) => {
      this.setCurrentRestaurantDetails(data);
    });
    this.yelpApi.getRestaurantReviews(currentRestaurantId).then(({ data }) => {
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

  @action setFilterByCategory = filterByCategory => {
    this.filterByCategory = filterByCategory;
  };

  @action setFilterByPrice = filterByPrice => {
    this.filterByPrice = filterByPrice;
  };

  @computed get filteredRestaurants() {
    let filteredRestaurants = this.restaurants;
    if (this.filterByOpenNow) {
      filteredRestaurants = filteredRestaurants.filter(r => !r.is_closed);
    }
    if (this.filterByCategory) {
      filteredRestaurants = filteredRestaurants.filter(r =>
        r.categories.find(c => c.title === this.filterByCategory)
      );
    }
    if (this.filterByPrice) {
      filteredRestaurants = filteredRestaurants.filter(
        r => r.price === this.filterByPrice
      );
    }
    return filteredRestaurants;
  }

  @computed get categories() {
    return this.restaurants ? [
      ...new Set(
        this.restaurants.reduce(
          (acc, { categories }) => [
            ...acc,
            ...categories.map(({ title }) => title),
          ],
          []
        )
      ),
    ] : [];
  }
}

export { AppState };
