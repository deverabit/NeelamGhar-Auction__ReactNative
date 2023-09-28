import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Buyingpage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      Alert.alert('Error', 'Please enter all fields');
    } else if (cardNumber.length < 16) {
      Alert.alert('Error', 'Card number should be 16 digits');
    } else if (isNaN(expiryDate) || expiryDate.length !== 4) {
      Alert.alert('Error', 'Expiry date should have exactly 4 digits');
    } else {
      const month = expiryDate.slice(0, 2);
      const year = expiryDate.slice(2);
      const currentYear = new Date().getFullYear() % 100;
      if (year < currentYear || (year === currentYear && month < new Date().getMonth() + 1)) {
        Alert.alert('Payment Failed', 'Card has expired');
      } else {
        // Handle payment logic here
        Alert.alert('Success', 'Payment successful!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>
      <View style={styles.inputContainer}>
        <Icon name="credit-card" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          placeholder="Card Number"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={expiryDate}
          onChangeText={setExpiryDate}
          keyboardType="numeric"
          maxLength={4}
          placeholder="Expiry Date (MMYY)"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={cvv}
          onChangeText={setCVV}
          keyboardType="numeric"
          maxLength={3}
          placeholder="CVV"
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  payButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Buyingpage;
