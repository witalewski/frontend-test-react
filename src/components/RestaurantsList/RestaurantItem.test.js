import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANT from '../../fixtures/restaurant.json';
import { RestaurantItem } from './RestaurantItem';

describe('RestaurantItem', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<RestaurantItem restaurant={MOCK_RESTAURANT} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
