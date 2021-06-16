import React from 'react';

import { act, fireEvent } from '@testing-library/react-native';
import { render } from '../../../../test/render';
import { mockedRoute, mockedGoBack, mockedToggleDrawer } from '../../../../test/setup';

import Layout from './Layout';

jest.useFakeTimers();

describe('Layout', () => {
  beforeEach(() => {
    mockedRoute.mockReturnValue({ name: 'Home' });
  });

  it('should go back previous route', () => {
    const { getByTestId } = render(
      <Layout children={<>Children component</>} />
    );

    act(() => {
      fireEvent.press(getByTestId('goBackButton'));
    });

    expect(mockedGoBack).toHaveBeenCalled();
  });

  it('should toggle drawer', () => {
    const { getByTestId } = render(
      <Layout children={<>Children component</>} />
    );

    act(() => {
      fireEvent.press(getByTestId('openMenuButton'));
    });

    expect(mockedToggleDrawer).toHaveBeenCalled();
  });
});
