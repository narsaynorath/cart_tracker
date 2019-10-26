import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';

export default Total = props => (
  <KeyboardAvoidingView style={styles.totalFooter}>
    <Text>{`Total: $${props.total}`}</Text>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  totalFooter: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
