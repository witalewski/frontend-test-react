import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MOCK_RESTAURANT from '../../fixtures/restaurant.json';
import { Status } from './Status';

describe('Status', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Status open={!MOCK_RESTAURANT.is_closed} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
