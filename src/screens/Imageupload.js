import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

const Imageupload = ({ navigation }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(res);
      Alert.alert('File Selected', 'File selected successfully.');
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled document picker');
      } else {
        console.log('DocumentPicker Error:', error);
      }
    }
  };

  const handleUploadImage = () => {
    Alert.alert('Image Uploaded', 'Image uploaded successfully.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.profileContainer}></View>

      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSelectFile}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleUploadImage}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {},
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Imageupload;
