import React from 'react';
import {
  SafeAreaView,
  ScrollView,
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
        <ScrollView
          keyboardShouldPersistTaps="never"
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
