import React from 'react';
import RNSecureKeyStore from 'react-native-secure-key-store';

import { ApiService } from '../services/ApiService';
import { StorageService } from '../services/StorageService';

import { ComposeProvider, Provider } from './compose';
import { IDependencies } from './rootState';
import { GeneralProvider } from './general/provider';
import { AuthProvider } from './auth/provider';

export const dependencies: IDependencies = {
  apiService: new ApiService(),
  storageService: new StorageService({ storage: RNSecureKeyStore })
};

export const providers: Provider[] = [GeneralProvider, AuthProvider];

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeProvider deps={dependencies} providers={providers}>
      {children}
    </ComposeProvider>
  )
}