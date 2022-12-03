import React, {Component} from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SelectionPage = ({navigation}) => {
  state={}
  return(
    <View >
      <View style={styles.circle}></View>
      
      <Text style={styles.text1}>Select  User</Text>

      <View>
        <TouchableOpacity style={styles.sellerButton} onPress={ () => navigation.navigate('SellerSignIn')}>
          <Text style={styles.sellerText}> SELLER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.custButton} onPress={ () => navigation.navigate('CustomerSignIn')}>
          <Text style={styles.custText}> CUSTOMER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 300,
    height: 300,
    backgroundColor: "#388E3C",
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: 70,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 30,
  },
  sellerButton: {
    width: 250, 
    height: 55,
    backgroundColor: "#388E3C",
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 30,
  },
  sellerText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  custButton: {
    width: 250, 
    height: 55,
    backgroundColor: "#388E3C",
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
  },
  custText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default SelectionPage;