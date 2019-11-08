/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';

// import Storybook from './storybook';
import App from './App';
import colors from './App/config/colors';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.blueGrotto,
    primary: colors.burntSienna,
    accent: colors.gold,
  },
};

export default Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => Storybook);
