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
  recoverSession: () => void;
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
      console.log('response', response);
      await deps.storageService.set('token', response.data);
      dispatch({ type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user: response.data } });
      setLoading('authSignIn', false);
    } catch (e) {
      setLoading('authSignIn', false, true, e.message);
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }, [setLoading, dispatch, addToast]);

  const recoverSession = useCallback(async () => {
    setLoading('authRecoverSession', true);
    try {
      const token = await deps.storageService.get('token');
      console.log('token?', token);
      // fetch user with token
      // const user = await deps.apiService.getUser();
      dispatch({ type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user: {} } });
      setLoading('authRecoverSession', false);
    } catch (e) {
      setLoading('authRecoverSession', false, true, e.message);
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading('authSignOut', true);
    try {
      await deps.storageService.remove('token');
      dispatch({ type: ActionType.AUTH_SIGN_OUT, payload: {} });
      setLoading('authSignOut', false);
    } catch (e) {
      setLoading('authSignOut', false, true, e.message);
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }, [setLoading, dispatch]);

  const value = useMemo(() => ({ state, signIn, signOut, recoverSession }), [state]);

  return <AuthContext.Provider value={value} {...props} />
};

