import React, {Component} from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SignIn = ({navigation}) => {
  state={}
  return(
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
      <Text style = {styles.welcome}>Welcome,</Text>
      <Text style = {styles.continue}>Sign-in to continue</Text>

      <View style = {styles.inputsBox}>
      <TextInput 
      placeholder='Cellphone Number(Ex. 09XXXXXXXXX)'
      style = {styles.input} 
      keyboardType='numeric'>
      </TextInput>
      

      <TextInput 
      placeholder='Password'
      style = {styles.input} 
      secureTextEntry={true}>
      </TextInput>
      </View>

      <TouchableOpacity 
      style = {styles.button}
      onPress={ () => navigation.navigate('Tabs')}>
        <Text 
        style = {styles.buttonText}>
          LOG IN</Text>
      </TouchableOpacity>
      
      <Text style = {styles.ask}>Don't have account?</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Registration')}>
        <Text style = {styles.registerButton}>
          Register Here</Text>
          </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ground:{
    backgroundColor: '#F4F4F4',
    flex:1,
    justifyContent: 'center',
  },
  foreground:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
  welcome:{
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
  },
  continue:{
    color: 'black',
    fontSize: 22,
  },
  inputsBox:{
    marginTop: 70,
  },
  input:{
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 15,
    fontSize: 18,
    padding: 10,
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 30,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ask:{
    textAlign: 'center',
    marginTop: 150,
    fontSize: 16,
  },
  registerButton:{
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default SignIn;