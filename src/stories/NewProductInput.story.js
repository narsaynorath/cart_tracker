import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import NewProductInput from '../components/NewProductInput';

storiesOf('NewProductInput', module).add('Default', () => (
  <NewProductInput
    name=""
    price=""
    onNameChange={action('defaultNameChange')}
    onPriceChange={action('defaultPriceChange')}
    onProductAdd={action('defaultProductAdd')}
  />
));
