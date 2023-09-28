import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
   // { id: 1, name: 'Adidas Shoes', price: "10K" },
    { id: 2, name: 'Wireless Headsets', price: "5K" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Rs{item.price}</Text>
      <Text style={styles.itemQuantity}></Text>
      <Button title="Remove" onPress={() => removeItem(item.id)} />
    </View>
  );

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigation.navigate('BuyingPage');
    } else {
      alert('Cart is empty');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "blue",
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#777',
  },
});

export default CartPage;
