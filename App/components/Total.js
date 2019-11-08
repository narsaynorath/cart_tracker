import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default Total = ({ total, tax }) => (
  <SafeAreaView style={styles.totalFooter}>
    <Text>{`Subtotal: $${total.toFixed(2)}`}</Text>
    <Text>{`Total: $${(total * tax).toFixed(2)}`}</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  totalFooter: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
