import { useMemo, createContext, useReducer, useContext, useEffect } from 'react';

import { GeneralModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';

export const GeneralContext = createContext<
  {
    state: IState;
    addToast: (todo: GeneralModel.IToast) => void;
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

  const addToast = (todo: GeneralModel.IToast) => {
    dispatch({ type: ActionType.ADD_TOAST , payload: { todo } });
  };

  const removeToast = (id: number) => {
    dispatch({ type: ActionType.REMOVE_TOAST , payload: { id } });
  };

  const setLoading = (key: string, isLoading: boolean, hasError: boolean = false, error: any = null) => {
    dispatch({ type: ActionType.SET_LOADING , payload: { key, isLoading, hasError, error } });
  }

  useEffect(() => {
    if (state.toastList.length > 0) {
      setTimeout(() => {
        removeToast(state.toastList.length);
      }, 3000);
    }
  }, [state.toastList]);

  const value = useMemo(() => ({ state, addToast, removeToast, setLoading }), [state]);

  return <GeneralContext.Provider value={value} {...props} />
};

