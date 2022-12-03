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
import SelectionPage from "./screens/selectionpage";
import CustomerRegistration from "./screens/customerregistration";
import CustomerSignIn from "./screens/customerSignin";
import BottomNavigation from "./navigation/bottomNavigation";
import VegetableDetails from "./screens/VegetableDetails";

import Vegetables from './screens/Categories/Vegetables';
import Fruits from './screens/Categories/Fruits';
import ProductDetails from './screens/ProductDetails';
import ProductReviews from './screens/ProductReviews';
import CheckoutForm from './screens/CheckoutForm';
import ShippingAddress from './screens/ShippingAddress';
import EditAddress from './screens/EditAddress';
import EditCustomerProfile from './screens/EditCustomerProfile';
import ToPay from './screens/ToPay';
import ToReceive from './screens/ToReceive';
import ToReview from './screens/ToReview';
import WriteReview from './screens/WriteReview';
import RecentTransactions from './screens/RecentTransactions';
import OrderReviews from './screens/OrderReviews';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SelectionPage"
          component={ SelectionPage }
        />
        <Stack.Screen name="SellerRegistration" component={ Registration } />
        <Stack.Screen name="CustomerRegistration" component={ CustomerRegistration } />
        <Stack.Screen name="Tabs" component={ Tabs }  />
        <Stack.Screen name="SellerSignIn" component={ SignIn } />
        <Stack.Screen name="CustomerSignIn" component={ CustomerSignIn } />
          <Stack.Screen name="BottomNavigation" component={ BottomNavigation } options = {{ 
            headerShown: false,
          }} />
          <Stack.Screen name="Vegetables" component={ Vegetables } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Fruits" component={ Fruits } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ProductDetails" component={ ProductDetails } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="VegetableDetails" component={ VegetableDetails } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ProductReviews" component={ ProductReviews } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="CheckoutForm" component={ CheckoutForm } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ShippingAddress" component={ ShippingAddress } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="EditAddress" component={ EditAddress} options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="EditCustomerProfile" component={ EditCustomerProfile } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToPay" component={ ToPay } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToReceive" component={ ToReceive } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToReview" component={ ToReview } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="WriteReview" component={ WriteReview } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="RecentTransactions" component={ RecentTransactions } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="OrderReviews" component={ OrderReviews } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="SearchScreen" component={ SearchScreen } options = {{ 
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