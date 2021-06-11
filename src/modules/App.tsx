import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import Main from './views/common/Main';
import ErrorBoundary from './views/common/ErrorBoundary';

import { ContextProvider } from './context/provider';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ErrorBoundary>
      <ContextProvider>
        <Main />
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
