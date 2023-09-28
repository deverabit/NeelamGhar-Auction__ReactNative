import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { label: 'Mobile', value: 'mobile' },
    { label: 'Camera', value: 'camera' },
    { label: 'Headphones', value: 'headphones' },
    { label: 'Watch', value: 'watch' },
    { label: 'Other', value: 'other' },
  ];

  const handleImageUpload = () => {
    // Handle image upload logic here
  };

  const handleProductSubmit = () => {
    if (!name || !description || !price || !category) {
      Alert.alert('Fill all fields', 'Please fill in all the required fields.');
      return;
    }

    console.log('Product submitted:', {
      name,
      description,
      price,
      category,
    });

    Alert.alert('Success', 'Your product has been uploaded successfully.');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (value) => {
    setCategory(value);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="upload" size={80} color="white" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#999"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
          <Text style={styles.dropdownHeaderText}>{category ? category : 'Select Category'}</Text>
          <Icon name={dropdownOpen ? 'chevron-up' : 'chevron-down'} size={16} color="#999" />
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdown}>
            {categories.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.dropdownItem}
                onPress={() => handleCategorySelect(item.value)}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Imageupload')}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton1} onPress={handleProductSubmit}>
        <Text style={styles.buttonText}>Upload Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  dropdownHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownHeaderText: {
    fontSize: 16,
    color: '#999',
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  dropdownItem: {
    padding: 10,
    backgroundColor: '#fff',
  },
  dropdownItemText: {
    color: '#000',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  addButton1: {
    backgroundColor: '#2196F3',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductForm;
