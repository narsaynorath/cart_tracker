import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ProductEntry from '../components/ProductEntry';

import { Text, View } from 'react-native';

storiesOf('ProductEntry', module).add('Default', () => (
  <ProductEntry
    name={'Default'}
    price={0.0}
    onProductRemove={action('defaultProductRemove')}
  />
));
