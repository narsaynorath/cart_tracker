import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ActionButton from './_common/ActionButton';

export default ProductEntry = ({ name, price, onProductRemove }) => (
  <View behavior="padding" style={styles.productArea}>
    <Text style={styles.itemField} numberOfLines={1}>
      {name}
    </Text>
    <Text style={styles.priceField}>{price.toFixed(2)}</Text>
    <ActionButton type="delete" onPress={onProductRemove} />
  </View>
);

const styles = StyleSheet.create({
  productArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  itemField: {
    flex: 3,
  },
  priceField: {
    flex: 1,
  },
});
