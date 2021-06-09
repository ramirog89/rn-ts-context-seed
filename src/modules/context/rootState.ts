import React from 'react';
import { ApiService } from '../services/ApiService';
import { StorageService } from '../services/StorageService';

export interface IDependencies {
  apiService: ApiService;
  storageService: StorageService;
}

export interface IProviderProps {
  children: React.ReactNode;
  deps: IDependencies;
};
