import React, { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';

import Total from './components/Total';
import Header from './components/Header';
import NewProductInput from './components/NewProductInput';
import CartList from './components/CartList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const addProduct = () => {
    setProducts(() => [
      ...products,
      { name: newProductName, price: parseFloat(newProductPrice) || 0 },
    ]);
    setNewProductName('');
    setNewProductPrice('');
    Keyboard.dismiss();
  };

  const removeProduct = index => {
    setProducts(() => products.filter((p, i) => i !== index));
  };

  const cartTotal = products.reduce((acc, p) => p.price + acc, 0);

  return (
    <View style={styles.container}>
      <Header headerText="Cart Tracker" subtitleText="Track all the things!" />

      <NewProductInput
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

      <Total tax={1.13} total={cartTotal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
