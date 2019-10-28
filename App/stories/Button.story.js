import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ActionButton from '../components/_common/ActionButton';

import { Text, View } from 'react-native';

storiesOf('ActionButton', module)
  .add('create', () => (
    <ActionButton type="create" onPress={action('createPress')} />
  ))
  .add('delete', () => (
    <ActionButton type="delete" onPress={action('deletePress')} />
  ));
