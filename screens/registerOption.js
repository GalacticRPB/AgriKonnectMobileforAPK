import React, {Component} from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput} from 'react-native';

const registerOption = ({navigation}) =>{
  state={}
  return(
    <View style = {styles.ground}>
    <View style={styles.circle} />
    <View style = {styles.foreground}>

      

      <TouchableOpacity 
      style = {styles.button}
      onPress={ () => navigation.navigate('signIn')}>
        <Text 
        style = {styles.buttonText}>
          SELLER</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.button}
      onPress={ () => navigation.navigate('signIn')}>
        <Text 
        style = {styles.buttonText}>
          BUYER</Text>
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
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 30,
    marginTop: 20,
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
  circle: {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
    backgroundColor: "#388E3C",
    alignSelf: "center",
    marginTop: 50,
  },
})

export default registerOption;