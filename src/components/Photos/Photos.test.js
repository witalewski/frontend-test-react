import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANT from '../../fixtures/restaurant.json';
import { Photos } from './Photos';

describe('Photos', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Photos photos={MOCK_RESTAURANT.photos.map(src => ({src}))} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
