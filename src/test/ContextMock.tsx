import React from 'react';

import { ApiServiceMock } from './ApiServiceMock';
import { StorageServiceMock } from './StorageServiceMock';
import { ComposeProvider, Provider } from '../modules/context/compose';
import { IDependencies } from '../modules/context/rootState';
import { GeneralProvider } from '../modules/context/general/provider';
import { AuthProvider } from '../modules/context/auth/provider';

export const dependencies: IDependencies = {
  apiService: new ApiServiceMock() as any,
  storageService: new StorageServiceMock() as any
};

export const providers: Provider[] = [GeneralProvider, AuthProvider];

export const ContextMock = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeProvider deps={dependencies} providers={providers}>
      {children}
    </ComposeProvider>
  )
};
