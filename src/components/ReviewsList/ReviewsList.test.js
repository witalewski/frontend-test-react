import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_REVIEWS from '../../fixtures/reviews.json';
import { ReviewsList } from './ReviewsList';

describe('ReviewsList', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ReviewsList currentRestaurantReviews={MOCK_REVIEWS.reviews} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
