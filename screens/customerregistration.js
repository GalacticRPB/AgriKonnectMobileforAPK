import React, { useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const CustomerRegistration = ({navigation}) => {

  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [data, setData] = useState([]);

  const RegisterCustomer = async () => {
    try{
      const response = await fetch('http://10.0.2.2:8000/api/registerCustomer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: firstname,
          middlename: middlename,
          lastname: lastname,
          username: username,
          email: email,
          password: password,
        })
      });

      if((response).status === 200)
      {
        setFirstname('');
        setMiddlename(''),
        setLastname(''),
        setUsername(''),
        setEmail(''),
        setPassword('');
        Alert.alert("Customer Registered Successfully!");
        navigation.navigate('CustomerSignIn');
      }
    console.log("test")
    console.log(response)
    const json = await response.json();
    setData(json.customer);
    }
    catch (error) {
      console.error(error);
    }
  }
  
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
      <Text style = {styles.create}>Create an Account</Text>
      <Text style = {styles.subcreate}>Sign-up to continue</Text>
      
      <View style = {styles.inputsBox}> 
      {/*<SelectDropdown
        defaultButtonText={'Select user'}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />*/}
       <TextInput 
      placeholder='First Name'
      style = {styles.input}
      onChangeText = { (text) => setFirstname(text) } >
      </TextInput>

      <TextInput 
      placeholder='Middle Name'
      style = {styles.input}
      onChangeText = { (text) => setMiddlename(text) }
      >
      </TextInput>

      <TextInput 
      placeholder='Last Name'
      style = {styles.input}
      onChangeText = { (text) => setLastname(text) }
      >
      </TextInput>

      <TextInput 
      placeholder='Username'
      style = {styles.input}
      onChangeText = { (text) => setUsername(text) }>
      </TextInput>

      <TextInput 
      placeholder='Email'
      style = {styles.input}
      onChangeText = { (text) => setEmail(text) }
      >
      </TextInput>
      
      <TextInput 
      placeholder='Password'
      style = {styles.input} 
      secureTextEntry={true}
      onChangeText = { (text) => setPassword(text) }>
      </TextInput>
      </View>

      <TouchableOpacity 
      style = {styles.button}
      onPress={ RegisterCustomer}>
        <Text 
        style = {styles.buttonText}>
          REGISTER</Text>
      </TouchableOpacity>
      
      <Text style = {styles.ask}>Already have an account?</Text>
      <TouchableOpacity  onPress={ () => navigation.navigate('CustomerSignIn')}>
        <Text style = {styles.loginButton}>
          Login Here</Text>
          </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    color: '#F4F4F4',
  },
  ground:{
    backgroundColor: '#F4F4F4',
    flex:1,
    justifyContent: 'center',
  },
  foreground:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  create:{
    color: 'green',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subcreate:{
    fontSize: 20,
    alignSelf: 'center',
  },
  inputsBox:{
    marginTop: 20,
  },
  input:{
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
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
  ask:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  loginButton:{
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontWeight: 'bold'},
  dropdown1DropdownStyle: {backgroundColor: 'white'},
  dropdown1RowStyle: {backgroundColor: 'green', borderBottomColor: 'green'},
  dropdown1RowTxtStyle: {color: 'white', textAlign: 'left'},

})

export default CustomerRegistration;