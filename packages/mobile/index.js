import { App } from '@monorepo-apps/my-app';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
