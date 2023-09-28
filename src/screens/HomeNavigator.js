import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CartPage from './CartPage';
import Homepage from './Homepage';
import Profile from './Profile';
import ProductDetail1 from './ProductPage1';
import FavoriteProductPage from './FavouritePage';
import ProductForm from './ProductForm';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon name="home" size={24} color={focused ? 'blue' : 'gray'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon name="shopping-cart" size={24} color={focused ? 'blue' : 'gray'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavoriteProductPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon name="heart" size={24} color={focused ? 'blue' : 'gray'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon name="user" size={24} color={focused ? 'blue' : 'gray'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleAddButtonPress = () => {
    navigation.navigate('ProductForm'); // Replace 'ProductUpload' with your desired screen name
  };

  return (
    <>
      <HomeNavigator />
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
