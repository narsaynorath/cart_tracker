import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  headerText: {
    fontWeight: 'bold',
  },
});
