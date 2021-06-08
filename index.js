import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/modules/App';

if (process.env.NODE_ENV !== 'production') {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

AppRegistry.registerComponent(appName, () => App);
