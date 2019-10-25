import React, {useState} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';

import Total from './Total';
import Header from './Header';
import NewProductArea from './NewProductArea';
import CartList from './CartList';

export default App = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const addProduct = () => {
    setProducts(products => [
      ...products,
      {name: newProductName, price: parseFloat(newProductPrice) || 0},
    ]);
    setNewProductName('');
    setNewProductPrice('');
    Keyboard.dismiss()
  };

  const removeProduct = index => {
    setProducts(products => products.filter((p, i) => i !== index));
  };

  const cartTotal = products.reduce((acc, p) => p.price + acc, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={'Cart Tracker'} />

      <NewProductArea
        name={newProductName}
        price={newProductPrice}
        onNameChange={val => setNewProductName(val)}
        onPriceChange={val => setNewProductPrice(val)}
        onProductAdd={() => addProduct()}
      />

      <CartList
        products={products}
        onProductRemove={index => removeProduct(index)}
      />

      <Total total={cartTotal.toFixed(2)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
