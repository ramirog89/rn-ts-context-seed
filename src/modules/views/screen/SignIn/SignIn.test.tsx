import React from 'react';

import { mockedRoute } from '../../../../test/setup';
import { render } from '../../../../test/render';

import SignIn from './SignIn';

describe('SignInScreen', () => {
  beforeEach(() => {
    mockedRoute.mockReturnValue('SignIn');
  });

  it('should render', () => {
    const { toJSON } = render(<SignIn />);
    expect(toJSON()).toMatchSnapshot();
  });
});
