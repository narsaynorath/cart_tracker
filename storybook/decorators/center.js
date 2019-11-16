import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const Center = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5DC',
  },
});

export default Center;
