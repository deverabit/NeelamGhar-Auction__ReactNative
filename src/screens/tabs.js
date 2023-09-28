import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Updateinfo" component={Updateinfo} />
      <Tab.Screen name="ProductDetail" component={ProductDetail} />
     
    </Tab.Navigator>
  );
}
export default Tabs;