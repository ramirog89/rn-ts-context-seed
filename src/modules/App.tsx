import 'react-native-gesture-handler';
import React from 'react';

import Main from './views/common/Main';
import ErrorBoundary from './views/common/ErrorBoundary';

import { ContextProvider } from './context/provider';

const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <Main />
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
