import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuth } from '../../../context/auth';

import Router from '../Router';
import ToastList from '../ToastList';
import ErrorBoundary from '../ErrorBoundary';

const Main = () => {
  const { state, recoverSession } = useAuth();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    recoverSession();
  }, []);

  useEffect(() => {
    if (state.sessionChecked) {
      setLoading(false);
    }
  }, [state.sessionChecked]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ alignSelf: 'center', flex: 1 }}
        size="large"
        color="#777777"
        animating
      />
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
        <ToastList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Main;
