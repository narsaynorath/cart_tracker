import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ProductEntry from '../components/ProductEntry';

storiesOf('ProductEntry', module).add('Default', () => (
  <ProductEntry
    name="Default"
    price={0.0}
    onProductRemove={action('defaultProductRemove')}
  />
));
