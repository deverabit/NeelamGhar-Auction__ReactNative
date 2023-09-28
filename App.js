import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useState } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './src/screens/Homepage';
import Verification from './src/screens/Verification';
import Profile from './src/screens/Profile';
import Updateinfo from './src/screens/Updateinfo';
import Uploadpost from './src/screens/Uploadpost';
import Imageupload from './src/screens/Imageupload';
import ProductDetail1 from './src/screens/ProductPage1';
import ImageCarousel from './src/screens/ImageSlider';
import CartPage from './src/screens/CartPage';
import BiddingPage from './src/screens/BiddingPage';
import Bid from './src/screens/NewBid';
import HomeNavigator from './src/screens/HomeNavigator';
import ProductDetail2 from './src/screens/ProductPage2';
import ProductDetail3 from './src/screens/ProductPage3';
import ProductDetail4 from './src/screens/ProductPage4';
import ProductDetail5 from './src/screens/ProductPage5';
import ProductDetail6 from './src/screens/ProductPage6';
import BuyingPage from './src/screens/BuyingPage';
import ProductForm from './src/screens/ProductForm';
import BiddingPage2 from './src/screens/BiddingPage2';
import Bid2 from './src/screens/Bid2';
import SearchResults from './src/screens/SearchResult';
import ProductDetail from './src/screens/PoductDetail';
import Imageupload2 from './src/screens/Imageuplaod2';
import Support from './src/screens/Support';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="login" component={Login}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="signup" component={Signup}
          options={
            {
              headerShown: false
            }
          }

        />

        <Stack.Screen name="HomeNavigator" component={HomeNavigator}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="Support" component={Support}
          options={
            {
              headerShown: false
            }
          }

        />
         <Stack.Screen name="Imageupload2" component={Imageupload2}
          options={
            {
              headerShown: false
            }
          }

        />

        <Stack.Screen name="verification" component={Verification}
          options={
            {
              headerShown: false
            }
          }
          />
           <Stack.Screen name="Homepage" component={Homepage}
          options={
            {
              headerShown: false
            }
          }

        />
         <Stack.Screen name="BuyingPage" component={BuyingPage}
          options={
            {
              headerShown: false
            }
          }

        />
         <Stack.Screen name="ProductDetail" component={ProductDetail}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="BiddingPage2" component={BiddingPage2}
          options={
            {
              headerShown: false
            }
          }

        />
         <Stack.Screen name="ProductForm" component={ProductForm}
          options={
            {
              headerShown: false
            }
          }
        />
         <Stack.Screen name="Profile" component={Profile}
          options={
            {
              headerShown: false
            }
          }

        />
         <Stack.Screen name="Updateinfo" component={Updateinfo}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="Uploadpost" component={Uploadpost}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="Imageupload" component={Imageupload}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="ProductDetail1" component={ProductDetail1}
          options={
            {
              headerShown: false
            }
          }

        />
          <Stack.Screen name="ProductDetail2" component={ProductDetail2}
          options={
            {
              headerShown: false
            }
          }

        />
           <Stack.Screen name="ProductDetail3" component={ProductDetail3}
          options={
            {
              headerShown: false
            }
          }

        />
            <Stack.Screen name="ProductDetail4" component={ProductDetail4}
          options={
            {
              headerShown: false
            }
          }

        />
            <Stack.Screen name="ProductDetail5" component={ProductDetail5}
          options={
            {
              headerShown: false
            }
          }

        />
            <Stack.Screen name="ProductDetail6" component={ProductDetail6}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="ImageCarousel" component={ImageCarousel}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="Cart" component={CartPage}
          options={
            {
              headerShown: false
            }
          }

        />
        <Stack.Screen name="Bid" component={Bid}
          options={
            {
              headerShown: false
            }
          }

        />
<Stack.Screen name="Bid2" component={Bid2}
          options={
            {
              headerShown: false
            }
          }

        />
         
        <Stack.Screen name="SearchResults" component={SearchResults} 
        options={
          {
            headerShown: false
          }
        }

      />
       
  


      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
