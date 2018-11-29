import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Filters } from './Filters';

describe('Filters', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Filters
        filterByOpenNow
        setFilterByOpenNow={jest.fn()}
        categories={['Cafe', 'Modern European']}
        setFilterByCategory={jest.fn()}
        setFilterByPrice={jest.fn()}
      />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
