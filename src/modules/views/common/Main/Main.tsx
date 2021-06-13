import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';

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
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
      <ToastList />
    </SafeAreaView>
  );
}

export default Main;
