import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import ErrorBoundary from '../ErrorBoundary';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <ErrorBoundary>
      <SafeAreaView>
          <StatusBar />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
            <View>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </View>
          </ScrollView>
      </SafeAreaView>
    </ErrorBoundary>
  );
}

export default Layout;
