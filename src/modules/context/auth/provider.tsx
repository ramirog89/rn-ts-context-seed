import React, { useMemo, createContext, useReducer, useContext, useCallback } from 'react';
import jwt_decode from 'jwt-decode';

import { GeneralModel, UserModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';
import { useGeneral } from '../general';

interface IAuthContext {
  state: IState;
  signIn: (credentials: UserModel.ILoginRequest) => void;
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
  const { addToast } = useGeneral();

  const signIn = useCallback(async  (credentials: UserModel.ILoginRequest) => {
    try {
      const response = await deps.apiService.signIn(credentials);
      const user = jwt_decode(response.token);
      await deps.storageService.set('token', response.token);
      dispatch({ type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user } });
    } catch (e) {
      addToast({ message: 'authSignIn error', type: GeneralModel.ToastType.ERROR });
    }
  }, [dispatch]);

  const recoverSession = useCallback(async () => {
    const token: string | undefined = await deps.storageService.get('token');
    if (token) {
      const user = jwt_decode(token);
      dispatch({ type: ActionType.AUTH_SIGN_IN_SUCCESS, payload: { user } });
    } else {
      dispatch({ type: ActionType.AUTH_SIGN_OUT, payload: {} });
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await deps.storageService.remove('token');
      dispatch({ type: ActionType.AUTH_SIGN_OUT, payload: {} });
    } catch (e) {
      addToast({ message: 'authSignOut error', type: GeneralModel.ToastType.ERROR });
    }
  }, [dispatch]);

  const value = useMemo(() => ({ state, signIn, signOut, recoverSession }), [state]);

  return <AuthContext.Provider value={value} {...props} />
};

