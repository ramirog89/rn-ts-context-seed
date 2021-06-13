import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  toast: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    opacity: 0.9,
    marginBottom: 5
  },
  success: {
    backgroundColor: 'green'
  },
  warning: {
    backgroundColor: 'yellow'
  },
  error: {
    backgroundColor: '#C93515',
  },
  toastMessage: {
    color: '#FFFFFF'
  }
});
