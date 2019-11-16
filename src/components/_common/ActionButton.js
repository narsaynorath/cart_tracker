import React from 'react';
import { FAB } from 'react-native-paper';

import colors from '../../config/colors';

const ActionButton = props => {
  const { onPress, type } = props;
  const backgroundColor = colors[type];
  let iconName;

  switch (type) {
    case 'create':
      iconName = 'plus';
      break;
    case 'delete':
      iconName = 'minus';
      break;
    default:
      iconName = 'help-rrhombus';
  }

  return (
    <FAB small icon={iconName} onPress={onPress} style={{ backgroundColor }} />
  );
};

export default ActionButton;
