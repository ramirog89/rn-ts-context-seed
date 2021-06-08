import React, { useMemo, createContext, useReducer, useContext, useCallback } from 'react';

import { GeneralModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';
import { useGeneral } from '../general';

interface IAuthContext {
  state: IState;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext is not wrapped with AuthContext.Provider');
  }
  return context;
};

export const AuthProvider = (props: IProviderProps) => {
  const { deps } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addToast, setLoading } = useGeneral();

  const signIn = useCallback(async (username: string, password: string) => {
    setLoading('authSignIn', true);
    try {
      const response = await deps.apiService.signIn(username, password);
      dispatch({ type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user: response.data } });
      setLoading('authSignIn', false);
    } catch (e) {
      setLoading('authSignIn', false, true, e.message);
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }, [setLoading, dispatch, addToast]);
  
  const signOut = useCallback(() => {
    setLoading('authSignOut', true);
    dispatch({ type: ActionType.AUTH_SIGN_OUT, payload: {} });
    setLoading('authSignOut', false);
  }, [setLoading, dispatch]);

  const value = useMemo(() => ({ state, signIn, signOut }), [state]);

  return <AuthContext.Provider value={value} {...props} />
};

