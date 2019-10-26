import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import ProductEntry from './ProductEntry';
import EmptyState from './EmptyState';

export default CartList = props => (
  <FlatList
    style={styles.listArea}
    data={props.products}
    renderItem={({ item, index }) => (
      <ProductEntry
        {...item}
        onProductRemove={() => props.onProductRemove(index)}
      />
    )}
    extraData={props.products.length}
    keyExtractor={(item, index) => `${index}`}
    ListEmptyComponent={
      <EmptyState
        iconName="shopping-cart"
        text="Hey! Looks like your cart is empty!"
      />
    }
    contentContainerStyle={styles.emptyStateContainer}
  />
);

const styles = StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listArea: {
    flex: 1,
    width: '100%',
  },
});
