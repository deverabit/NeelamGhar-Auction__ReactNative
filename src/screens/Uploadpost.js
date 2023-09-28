import React from 'react';
import { View, Text,TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { button1 } from '../common/button';
const Uploadpost = ({ navigation })=> {
  return (
    <SafeAreaView>
<ScrollView>
<View style={styles.profileContainer}>
        <Image
          source={require('./../../assets/imtiaz.jpg')}
          style={styles.profileImage}
        />
<Text style={styles.button2}
                    onPress={() => navigation.navigate('Profile')}>Upload Image </Text>
</View>
<View style={{marginTop:50}}>
<View style= {styles.container}>
        
       
       <Text style={styles.bigBlue3}>Enter Product Name </Text>
      <TextInput style={{color:'black',marginLeft:8,fontSize:14}}placeholder="Change Password" placeholderTextColor='#D9D9D9'/>
      </View>
      </View>
      <Text style={button1}
                    onPress={() => navigation.navigate('Imageupload')}>Upload </Text>
      
      
</ScrollView>
</SafeAreaView>

    );
};

export default Uploadpost;
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    borderWidth: 2,
    borderColor: "thistle",
     borderRadius: 50,
     margin:14,
  },
  container1: {
    flexDirection:"row",
    borderWidth: 2,
    borderColor: "thistle",
     borderRadius: 50,
     margin:14,
     
  },
img:{
  width: 100, 
  height: 100 ,
 
//   marginTop:14,
//   marginLeft:7,
},
profileContainer: {
  alignItems: 'center',
  marginVertical: 20,
  marginTop:40,
},
profileImage: {
  width: 200,
  height: 200,
  borderRadius:20
 
},
button2: {
  color: 'blue',
  padding: 10,
  borderRadius: 5,
  fontSize: 18,
  minWidth: 150,
  textAlign: 'center',
  marginTop: 7,
},
bigBlue3: {
    color: 'blue',
    fontWeight:"600",
    fontSize: 16,
    marginVertical:-35,
    marginLeft:13,
    marginTop:-25,
  }



})