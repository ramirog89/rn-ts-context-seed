import React from 'react';
import { ApiService } from '../services/ApiService';

import { ComposeProvider, Provider } from './compose';
import { IDependencies } from './rootState';
import { GeneralProvider } from './general/provider';
import { TodoProvider } from './todo/provider';

export const dependencies: IDependencies = {
  apiService: new ApiService(),
};

export const providers: Provider[] = [GeneralProvider, TodoProvider];

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeProvider deps={dependencies} providers={providers}>
      {children}
    </ComposeProvider>
  )
}