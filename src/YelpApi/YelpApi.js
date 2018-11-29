import axios from 'axios';

export class YelpApi {
  searchForRestaurants = location =>
    axios.post(
      'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
      JSON.stringify({
        path: `search?location=${location}`,
      }),
      {
        headers: {
          'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
          'Content-Type': 'application/json',
        },
      }
    );

  getRestaurantDetails = id =>
    axios.post(
      'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
      JSON.stringify({
        path: id,
      }),
      {
        headers: {
          'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
          'Content-Type': 'application/json',
        },
      }
    );
  
    getRestaurantReviews = id =>
    axios.post(
      'https://qw6c0mxwz9.execute-api.eu-west-1.amazonaws.com/default/lightswitch',
      JSON.stringify({
        path: `${id}/reviews`,
      }),
      {
        headers: {
          'X-Api-Key': 'S0a5WCywb68N075YgoTVK3TidPB11bus2vplyW9s',
          'Content-Type': 'application/json',
        },
      }
    );
}
