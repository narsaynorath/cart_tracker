import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default EmptyState = props => (
  <View style={styles.container}>
    <Icon style={styles.iconStyle} size={50} name={props.iconName} />
    <Text>{props.text}</Text>
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
