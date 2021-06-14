import React from 'react';

import { mockedRoute } from '../../../../test/setup';
import { render } from '../../../../test/render';

import Profile from './Profile';

describe('ProfileScreen', () => {
  beforeEach(() => {
    mockedRoute.mockReturnValue('Profile');
  });

  it('should render', () => {
    const { toJSON } = render(<Profile />);
    expect(toJSON()).toMatchSnapshot();
  });
});
