import React, { useMemo, createContext, useReducer, useContext, useEffect } from 'react';

import { wait } from '../../../utils/wait';
import { GeneralModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';

export const GeneralContext = createContext<
  {
    state: IState;
    addToast: (toast: GeneralModel.IToast) => void;
  } | null
>(null);

export const useGeneral = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('GeneralContext is not wrapped with GeneralContext.Provider');
  }
  return context;
};

export const GeneralProvider = (props: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToast = async (toast: GeneralModel.IToast) => {
    const id = Date.now().toString();
    dispatch({ type: ActionType.ADD_TOAST, payload: { id, toast } });
    await wait(2000);
    dispatch({ type: ActionType.REMOVE_TOAST, payload: { id } });
  };

  const value = useMemo(() => ({ state, addToast }), [state]);

  return <GeneralContext.Provider value={value} {...props} />
};

