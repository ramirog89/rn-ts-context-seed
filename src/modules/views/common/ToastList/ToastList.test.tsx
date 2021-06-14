import React from 'react';

import { render } from '../../../../test/render';
import { getToast1 } from '../../../../test/entities';
import { GeneralContext } from '../../../context/general/provider';

import ToastList from './ToastList';

describe('ToastList', () => {
  it('should render', () => {
    const { toJSON } = render(
      <GeneralContext.Provider value={{ state: { loading: {}, toastList: [{ id: '1', toast: getToast1() }], }, addToast: jest.fn() }}>
        <ToastList />
      </GeneralContext.Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
