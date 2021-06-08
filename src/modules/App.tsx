import 'react-native-gesture-handler';
import React from 'react';

import ToastList from './views/common/ToastList';
import Router from './Router';

import { ContextProvider } from './context/provider';

const App = () => {
  return (
    <ContextProvider>
      <Router />
      <ToastList />
    </ContextProvider>
  );
};

export default App;
