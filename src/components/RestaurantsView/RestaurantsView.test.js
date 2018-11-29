import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { RestaurantsView } from './RestaurantsView';

describe('RestaurantsView', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <RestaurantsView />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
