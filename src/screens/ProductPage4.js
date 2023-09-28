import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetail4 = ({ navigation }) => {
  const handleAddToCart = () => {
    // Handle adding item to cart logic here
    // ...
    alert('Item added to cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.favrt2}>
          <Icon name="shopping-cart" size={24} color="black" onPress={() => navigation.navigate('CartPage')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity style={styles.favrt3}>
          <Icon name="arrow-left" size={24} color="black" onPress={() => navigation.navigate('Homepage')} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={require('./../../assets/alexunder-hess-bWZAPKm0zZE-unsplash.jpg')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Wireless Headsets</Text>
          <TouchableOpacity style={styles.favrt}>
            <Icon name="heart" size={24} color="red" theme="outlined" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          This product has been tested and Approved to EN32 It also complies with the latest RoHS, WEEE, FEC & CP65
          standard
        </Text>
        <Text style={styles.price2}>Total Number of Reviews : 4</Text>
        <Text style={styles.price}>New Arrival</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('BuyingPage')}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 90,
    padding: 10,
    backgroundColor: 'white',
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    alignContent: 'center',
    left: 135,
  },
  favrt: {
    flexDirection: 'row',
    marginLeft: 110,
    top: -37,
    left: 220,
  },
  favrt4: {
    flexDirection: 'row',
    marginLeft: 16,
    left: 16,
    marginTop: 20,
  },
  favrt2: {
    flexDirection: 'row',
    marginLeft: 90,
    top: 27,
    left: 230,
  },
  favrt3: {
    flexDirection: 'row',
    marginLeft: 14,
    bottom: 30,
    //right:230,
  },
  image: {
    width: '95%',
    height: 400,
    left: 10,
    resizeMode: 'cover',
    // borderBottomLeftRadius:50,
    // borderBottomRightRadius:50,
    borderRadius: 50,
  },
  detailsContainer: {
    padding: 2,
    left: 5,
  },
  title: {
    fontSize: 27,
    fontWeight: '900',
    marginBottom: 10,
    color: 'black',
    left: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
    left: 22,
    color: 'blue',
    top: -10,
  },
  price2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 3,
    left: 22,
    top: -11,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color: 'white',
    color: 'black',
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
  description: {
    fontSize: 13,
    marginBottom: 27,
    marginTop: -20,
    color: 'black',
    marginLeft: 14,
    left: 10,
  },
  button: {
    backgroundColor: '#192BC2',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 30,
    alignSelf: 'center',
    width: "100%",
    height: 50,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    top: 3,
  },
});

export default ProductDetail4;
