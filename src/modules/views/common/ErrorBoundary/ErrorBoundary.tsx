import React from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
}

type State = {
  error: Error | null;
  hasError: boolean;
}


export default class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Oops!</Text>
            <Text style={styles.subtitle}>{'There\'s an error'}</Text>
            <Text style={styles.error}>{this.state.error?.toString()}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Try again</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}