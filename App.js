import React from "react";
import {View, Button, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './screens/signIn';
import Registration from './screens/registration';
import Tabs from './navigation/tabs';
import EditProduct from "./screens/editProduct";
import AddProduct from "./screens/addProduct";
import TransactionDetails from "./screens/transactionDetail";
import Ongoing from "./screens/ongoing";
import Delivered from "./screens/delivered";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SignIn"
          component={ SignIn }
        />
        <Stack.Screen name="Registration" component={ Registration } />
        <Stack.Screen name="Tabs" component={ Tabs } options = {{ 
          headerRight: () => (
              <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"></Button>),
          headerLeft: () => (
            <Button
            onPress={() => alert('This is a button!')}
            title="Profile"
            color="#000"></Button>),
          headerShown: false
              
        }} />
        <Stack.Screen name="EditProduct" component={ EditProduct } />
        <Stack.Screen name="AddProduct" component={ AddProduct } />
        <Stack.Screen name="TransactionDetails" component={ TransactionDetails } />
        <Stack.Screen name="Ongoing" component={ Ongoing } />
        <Stack.Screen name="Delivered" component={ Delivered } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;