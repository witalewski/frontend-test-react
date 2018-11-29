import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANTS from '../../fixtures/restaurants.json';
import { RestaurantsList } from './RestaurantsList';

describe('RestaurantsList', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <RestaurantsList restaurants={MOCK_RESTAURANTS.businesses} getRestaurants={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
