import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuth } from '../../../context/auth';
import { useGeneral } from '../../../context/general';

import Router from '../Router';
import ErrorBoundary from '../ErrorBoundary';

const Main = () => {
  const { recoverSession } = useAuth();
  const { state } = useGeneral();

  console.log('loading', state.loading);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    recoverSession();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Main;
