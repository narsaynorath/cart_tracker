/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// import Storybook from './storybook';
import App from './src';
import colors from './src/config/colors';
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

const Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => Storybook);
