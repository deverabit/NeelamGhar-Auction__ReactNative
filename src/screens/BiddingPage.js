import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const BiddingPage = ({ item }) => {
  const [bidAmount, setBidAmount] = useState(item.startingPrice);

  const handleBid = () => {
    if (bidAmount < item.startingPrice) {
      alert('Please enter a bid of at least Rs 1000 or more.');
    } else {
      // Handle bid submission logic here
      alert(`Bid for ${item.name} submitted for ${bidAmount} Rs`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <View style={styles.bidContainer}>
        <Text style={styles.bidLabel}>Current Bid:</Text>
        <Text style={styles.bidAmount}>Rs{item.currentBid.toFixed(2)}</Text>
      </View>
      <View style={styles.bidContainer}>
        <Text style={styles.bidLabel}>Starting Price:</Text>
        <Text style={styles.bidAmount}>Rs{item.startingPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.bidInputContainer}>
        <Text style={styles.bidInputLabel}>Enter your bid:</Text>
        <TextInput
          style={styles.bidInput}
          value={bidAmount.toString()}
          onChangeText={(text) => setBidAmount(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.bidButton} onPress={handleBid}>
        <Text style={styles.bidButtonText}>Place Bid</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  bidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color: 'black',
  },
  bidLabel: {
    fontSize: 18,
    color: 'black',
  },
  bidAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  bidInputContainer: {
    marginBottom: 20,
    color: 'black',
  },
  bidInputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  bidInput: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: 'black',
  },
  bidButton: {
    backgroundColor: '#f00',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bidButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BiddingPage;
