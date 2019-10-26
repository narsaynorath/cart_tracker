import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default ProductEntry = props => (
  <View behavior="padding" style={styles.addArea}>
    <Text style={styles.itemField}>{props.name}</Text>
    <Text style={styles.priceField}>{props.price.toFixed(2)}</Text>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => props.onProductRemove()}
    >
      <Text style={styles.deleteButtonText}>-</Text>
    </TouchableOpacity>
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
  deleteButton: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
  },
  deleteButtonText: {
    height: 20,
  },
});
