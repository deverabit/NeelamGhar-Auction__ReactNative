import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Imageupload2 from './Imageuplaod2';

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdateProfile = () => {
    if (!name || !email || !password || !address) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!email.includes('@') || password.length < 8) {
      Alert.alert('Error', 'Invalid email or password');
      return;
    }

    // Handle updating user profile logic here
    // ...

    Alert.alert('Success', 'Profile updated successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <TouchableOpacity style={styles.profileImg} onPress={() => navigation.navigate('Imageupload2')}>
        <Image source={require('./../../assets/imtiaz.png')} style={styles.profileImage} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Icon name="user" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="map-marker" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#ccc"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <TouchableOpacity style={styles.updateBtn} onPress={handleUpdateProfile}>
        <Text style={styles.btnText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    color: 'black',
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 20,
  },
  updateBtn: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UpdateProfile;
