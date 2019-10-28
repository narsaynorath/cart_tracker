import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../config/colors';

export default ActionButton = props => {
  const { children, iconSize, onPress, type } = props;
  const backgroundColor = colors[type];
  let iconName;

  switch (type) {
    case 'create':
      iconName = 'add';
      break;
    case 'delete':
      iconName = 'delete';
      break;
  }

  return (
    <TouchableOpacity
      style={{ ...styles.addButton, backgroundColor }}
      onPress={onPress}
    >
      <Icon style={{ alignSelf: 'center' }} size={20} name={iconName} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
