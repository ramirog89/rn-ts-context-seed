import 'react-native-gesture-handler/jestSetup';

export const mockedNavigate = jest.fn();
export const mockedGoBack = jest.fn();
export const mockedRoute = jest.fn();

jest.mock('@react-navigation/core', () => ({
  ...jest.requireActual('@react-navigation/core'),
  useNavigation: () => ({
    navigate: mockedNavigate,
    goBack: mockedGoBack,
  }),
  useRoute: mockedRoute
}));
    
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  DrawerActions: {
    ...jest.requireActual('@react-navigation/native').DrawerActions,
    toggleDrawer: jest.fn()
  }
}));


jest.mock('react-native-reanimated', () => {
  console.error = () => {};
  console.warn = () => {};
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
