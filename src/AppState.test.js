import MOCK_RESTAURANTS from './fixtures/restaurants.json';
import { AppState } from './AppState';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState();
    appState.setRestaurants(MOCK_RESTAURANTS.businesses);
  });

  it('filters restaurants by category', () => {
    appState.setFilterByCategory('Creperies');
    expect(appState.filteredRestaurants.map(({ id }) => id)).toEqual([
      'KdzK3WQwH4Gv5aSBl3RXKQ',
    ]);
  });

  it('filters restaurants by price', () => {
    appState.setFilterByPrice('$$$$');
    expect(appState.filteredRestaurants.map(({ id }) => id)).toEqual([
      'mnz-J7EckE1g4fGo8GDQIQ',
      'siXHw-IbEEASXmpvCMc6nA',
      'QZrGRFRSlzvGvz9TEGheRg',
    ]);
  });

  it('filters restaurants by category and price at the same time', () => {
    appState.setFilterByPrice('$$$$');
    appState.setFilterByCategory('Sushi Bars');
    expect(appState.filteredRestaurants.map(({ id }) => id)).toEqual([
      'mnz-J7EckE1g4fGo8GDQIQ',
      'QZrGRFRSlzvGvz9TEGheRg',
    ]);
  });
  
  it('sets filtered restaurants to empty list if none match criteria', () => {
    appState.setFilterByPrice('$$$$');
    appState.setFilterByCategory('Creperies');
    expect(appState.filteredRestaurants.length).toBe(0);
  });
});
