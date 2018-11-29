import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANT from '../../fixtures/restaurant.json';
import { RestaurantDetails } from './RestaurantDetails';

describe('RestaurantDetails', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <RestaurantDetails currentRestaurantDetails={MOCK_RESTAURANT} setCurrentRestaurantId={jest.fn()} match={{params:{id:MOCK_RESTAURANT.id}}} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
