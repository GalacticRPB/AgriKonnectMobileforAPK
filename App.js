import React from "react";
import {View, Button, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './screens/signIn';
import Registration from './screens/registration';
import Tabs from './navigation/tabs';

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;