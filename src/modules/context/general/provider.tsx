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
    removeToast: (index: number) => void;
    setLoading: (key: string, isLoading: boolean, hasError?: boolean, error?: any) => void;
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

  const addToast = (toast: GeneralModel.IToast) => {
    dispatch({ type: ActionType.ADD_TOAST , payload: { toast } });
  };

  const removeToast = async (id: number) => {
    await wait(3000);
    dispatch({ type: ActionType.REMOVE_TOAST , payload: { id } });
  };

  const setLoading = (key: string, isLoading: boolean, hasError: boolean = false, error: any = null) => {
    dispatch({ type: ActionType.SET_LOADING , payload: { key, isLoading, hasError, error } });
  }

  useEffect(() => {
    if (state.toastList.length) {
      removeToast(state.toastList.length);
    }
  }, [state.toastList]);

  const value = useMemo(() => ({ state, addToast, removeToast, setLoading }), [state]);

  return <GeneralContext.Provider value={value} {...props} />
};

