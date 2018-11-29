import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_REVIEWS from '../../fixtures/reviews.json';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ReviewItem review={MOCK_REVIEWS.reviews[0]} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
