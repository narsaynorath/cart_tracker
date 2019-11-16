import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ActionButton from './_common/ActionButton';

const NewProductInput = ({
  name,
  onNameChange,
  price,
  onPriceChange,
  onProductAdd,
}) => (
  <View behavior="padding" style={styles.addArea}>
    <TextInput
      placeholder="Product Name"
      value={name}
      style={styles.itemField}
      onChangeText={newName => onNameChange(newName)}
    />
    <TextInput
      placeholder="Price"
      value={price}
      style={styles.priceField}
      keyboardType="decimal-pad"
      onChangeText={newPrice => onPriceChange(newPrice)}
    />
    <ActionButton type="create" onPress={onProductAdd} />
  </View>
);

const styles = StyleSheet.create({
  addArea: {
    width: '100%',
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
});

export default NewProductInput;
