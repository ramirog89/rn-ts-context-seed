import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  toast: {
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: 'white'
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
