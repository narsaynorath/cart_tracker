import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../config/colors';

export default ActionButton = props => {
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
  }

  return (
    <FAB small icon={iconName} onPress={onPress} style={{ backgroundColor }} />
  );
};
