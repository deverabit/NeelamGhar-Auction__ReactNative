import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteProductPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/imtiaz.jpg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.username} onPress={() => navigation.navigate('Profile')}>
            Imtiaz Alam
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/search-icon.png')}
            style={styles.searchIcon}
          />
         
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Favourite Products</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productContainer}>
          <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail')}>
            <Image source={require('../../assets/iphone.jpg')} style={styles.productImage} />
            <Text style={styles.productName}>iPhone 14 Pro</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Icon name="heart" size={24} color="red" />
            </TouchableOpacity>
         </TouchableOpacity>
         <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail2')}>
            <Image source={require('./../../assets/varun-gaba-dcgB3CgidlU-unsplash.jpg')} style={styles.productImage} />
            <Text style={styles.productName}>Nikon 900D</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Icon name="heart" size={24} color="red" />
            </TouchableOpacity>
         </TouchableOpacity>
         <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail3')}>
            <Image source={require('./../../assets/alexunder-hess-bWZAPKm0zZE-unsplash.jpg')} style={styles.productImage} />
            <Text style={styles.productName}>Wireless Headset</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Icon name="heart" size={24} color="red" />
            </TouchableOpacity>
         </TouchableOpacity>
          {/* Add more favorite product items here */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  username: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    borderRadius: 40,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAllText: {
    fontSize: 16,
    color: 'blue',
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 90,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 6,
  },
  favoriteButton: {
    marginLeft: 'auto',
  },
  productPrice: {
    fontSize: 15,
    color: 'red',
  },
});

export default FavoriteProductPage;
