import { AppRegistry } from 'react-native';
import {
  addDecorator,
  getStorybookUI,
  configure,
} from '@storybook/react-native';

import Center from './decorators/center';
import { loadStories } from './storyLoader';
import { name as appName } from '../app.json';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

// add decorator to center all components in UI
addDecorator(getStory => <Center>{getStory()}</Center>);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  onDeviceUI: true,
  resetStorybook: true,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
