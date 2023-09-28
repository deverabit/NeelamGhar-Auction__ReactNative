import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextInput, StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetail1 from './ProductPage1';
import ProductDetail2 from './ProductPage2';
import ProductDetail3 from './ProductPage3';
import ProductDetail4 from './ProductPage4';

const Homepage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedButton, setSelectedButton] = useState('ALL');
  const [activeSlide, setActiveSlide] = useState(0);

  const allItems = [
    { name: 'iPhone 14 Pro', description: 'Lorem ipsum dolor sit', price: 'Starting from 20k', type: 'BID', image: require('../../assets/iphone.jpg'), screenName: 'ProductDetail1' },
    { name: 'Nikon 900D', description: 'Lorem ipsum dolor sit', price: 'Starting from 40k', type: 'BID', image: require('../../assets/varun-gaba-dcgB3CgidlU-unsplash.jpg'), screenName: 'ProductDetail2' },
    { name: 'Wireless Headsets', description: 'Lorem ipsum dolor sit', price: 'Starting from 5k', type: 'SELL', image: require('../../assets/alexunder-hess-bWZAPKm0zZE-unsplash.jpg'), screenName: 'ProductDetail4' },
    { name: 'Adidas Shoes', description: 'Lorem ipsum dolor sit', price: 'Starting from 10k', type: 'SELL', image: require('../../assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg'), screenName: 'ProductDetail5' },
    { name: 'Samsung Galaxy S22', description: 'Lorem ipsum dolor sit', price: 'Starting from 80k', type: 'BID', image: require('../../assets/samsung.jpeg'), screenName: 'ProductDetail3' },
    { name: 'Apple Watch', description: 'Lorem ipsum dolor sit', price: 'Starting from 30k', type: 'SELL', image: require('../../assets/applewatch.jpg'), screenName: 'ProductDetail6' },
  ];

  const filteredItems = allItems.filter(item => {
    if (selectedButton === 'ALL') {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (selectedButton === 'BID') {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) && item.type === 'BID';
    } else if (selectedButton === 'SELL') {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) && item.type === 'SELL';
    }
  });

  const Tab = createBottomTabNavigator();
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (activeSlide + 1) % filteredItems.length;
        carouselRef.current.scrollTo({ x: nextSlide * 320, animated: true });
        setActiveSlide(nextSlide);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSlide, filteredItems.length]);

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  const handleCarouselPress = index => {
    const item = filteredItems[index];
    if (item.screenName) {
      navigation.navigate(item.screenName);
    } else {
      console.log('No product detail screen defined for this item.');
    }
  };

  const handleScrollEnd = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    setActiveSlide(slideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText} onPress={() => navigation.navigate('Profile')}>
            Muhammad Ahmad
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('./../../assets/imtiaz.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Image source={require('./../../assets/search-icon.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Best Products</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel ref={carouselRef} data={filteredItems} activeSlide={activeSlide} handleCarouselPress={handleCarouselPress} handleScrollEnd={handleScrollEnd} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'ALL' && styles.buttonSelected]}
            onPress={() => handleButtonPress('ALL')}
          >
            <Text style={[styles.buttonText, selectedButton === 'ALL' && styles.buttonTextSelected]}>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'BID' && styles.buttonSelected]}
            onPress={() => handleButtonPress('BID')}
          >
            <Text style={[styles.buttonText, selectedButton === 'BID' && styles.buttonTextSelected]}>Place a Bid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedButton === 'SELL' && styles.buttonSelected]}
            onPress={() => handleButtonPress('SELL')}
          >
            <Text style={[styles.buttonText, selectedButton === 'SELL' && styles.buttonTextSelected]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        {filteredItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            {(item.type === 'BID' || item.type === 'SELL') && (
              <TouchableOpacity style={styles.itemButton} onPress={() => handleCarouselPress(index)}>
                <Text style={styles.itemButtonText}>{item.type === 'BID' ? 'Place a Bid' : 'Buy Now'}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Carousel = forwardRef(({ data, activeSlide, handleCarouselPress, handleScrollEnd }, ref) => {
  const scrollRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollTo: position => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo(position);
      }
    },
  }));

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
    >
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.carouselItem} onPress={() => handleCarouselPress(index)}>
          <Image source={item.image} style={styles.carouselImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
});

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'grey',
  },
  searchInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionLink: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselContainer: {
    borderRadius: 40,
    marginBottom: 20,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonSelected: {
    backgroundColor: 'lightblue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonTextSelected: {
    color: 'blue',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 2,
  },
  itemPrice: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  itemButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  itemButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  carouselItem: {
    width: 300,
    height: 200,
    marginHorizontal: 10,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
