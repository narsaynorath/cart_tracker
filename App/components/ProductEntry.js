import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionButton from './_common/ActionButton';

export default ProductEntry = props => (
  <View behavior="padding" style={styles.addArea}>
    <Text style={styles.itemField}>{props.name}</Text>
    <Text style={styles.priceField}>{props.price.toFixed(2)}</Text>
    <ActionButton type="delete" onPress={props.onProductRemove} />
  </View>
);

const styles = StyleSheet.create({
  addArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  itemField: {
    flex: 3,
  },
  priceField: {
    flex: 1,
  },
});
