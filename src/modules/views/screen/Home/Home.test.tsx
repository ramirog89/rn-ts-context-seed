import React from 'react';

import { mockedRoute } from '../../../../test/setup';
import { render } from '../../../../test/render';

import Home from './Home';

describe('HomeScreen', () => {
  beforeEach(() => {
    mockedRoute.mockReturnValue('Home');
  });

  it('should render', () => {
    const { toJSON } = render(<Home />);
    expect(toJSON()).toMatchSnapshot();
  });
});
