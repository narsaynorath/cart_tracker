import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default NewProductArea = props => (
  <View behavior="padding" style={styles.addArea}>
    <TextInput
      placeholder="Product Name"
      value={props.name}
      style={styles.itemField}
      onChangeText={name => props.onNameChange(name)}
    />
    <TextInput
      placeholder="Price"
      value={props.price}
      style={styles.priceField}
      keyboardType="decimal-pad"
      onChangeText={price => props.onPriceChange(price)}
    />
    <TouchableOpacity style={styles.addButton} onPress={props.onProductAdd}>
      <Text>+</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  addArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  addButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 100,
  },
});
