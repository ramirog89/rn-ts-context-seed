import React from 'react';

import { render } from '../../../../test/render';

import Main from './Main';

jest.useFakeTimers();

describe('Main', () => {
  it('should render', () => {
    const { toJSON } = render(<Main />);
    expect(toJSON()).toMatchSnapshot();
  });
});
