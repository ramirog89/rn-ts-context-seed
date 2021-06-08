import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    width: '80%',
    border: '1px solid gray',
    borderRadius: 5
  },
  success: {
    backgroundColor: 'green'
  },
  warning: {
    backgroundColor: 'yellow'
  },
  error: {
    backgroundColor: 'red'
  }
});
