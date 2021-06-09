import 'react-native-gesture-handler';
import React from 'react';

import Main from './views/common/Main';
import ToastList from './views/common/ToastList';
import ErrorBoundary from './views/common/ErrorBoundary';

import { ContextProvider } from './context/provider';

const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <Main />
        <ToastList />
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
