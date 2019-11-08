import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import ProductEntry from './ProductEntry';
import EmptyState from './EmptyState';

export default CartList = ({ products, onProductRemove }) => (
  <FlatList
    data={products}
    scrollEnabled={!!products.length}
    renderItem={({ item, index }) => (
      <ProductEntry {...item} onProductRemove={() => onProductRemove(index)} />
    )}
    extraData={products.length}
    keyExtractor={(item, index) => `${index}`}
    ListEmptyComponent={
      <EmptyState
        iconName="shopping-cart"
        text="Hey! Looks like your cart is empty!"
      />
    }
    ItemSeparatorComponent={Divider}
    contentContainerStyle={styles.emptyStateContainer}
  />
);

const styles = StyleSheet.create({
  emptyStateContainer: {
    flexGrow: 1,
  },
});
