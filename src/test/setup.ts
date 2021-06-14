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
  DrawerActions: {
    toggleDrawer: jest.fn()
  }
}));