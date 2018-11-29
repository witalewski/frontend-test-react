import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANT from '../../fixtures/restaurant.json';
import { StarRating } from './StarRating';

describe('StarRating', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <StarRating rating={MOCK_RESTAURANT.rating} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
