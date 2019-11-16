import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = ({ headerText, subtitleText }) => (
  <Appbar.Header style={styles.header}>
    <Appbar.Content title={headerText} subtitle={subtitleText} />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Header;
