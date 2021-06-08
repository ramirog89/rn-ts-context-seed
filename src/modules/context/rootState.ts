import React from 'react';
import { ApiService } from '../services/ApiService';

export interface IDependencies {
  apiService: ApiService
}

export interface IProviderProps {
  children: React.ReactNode;
  deps: IDependencies;
};
