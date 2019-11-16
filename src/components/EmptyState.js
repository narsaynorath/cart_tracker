import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const EmptyState = ({ iconName, text }) => (
  <View style={styles.container}>
    <Icon style={styles.iconStyle} size={50} name={iconName} />
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: 'grey',
    marginBottom: 20,
  },
});

export default EmptyState;
