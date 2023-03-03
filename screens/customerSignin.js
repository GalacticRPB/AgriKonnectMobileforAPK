import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const CustomerSignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    await fetch('http://10.0.2.2:8000/api/loginCustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password}),
    })
      .then(res => res.json())
      .then(resData => {
        if ('error' in resData) {
          Alert.alert('Error','Invalid Username or Password');
          console.log(resData);
        } else {
          global.id = resData.id;
          global.firstname = resData.firstname;
          global.middlename = resData.middlename;
          global.lastname = resData.lastname;
          global.username = resData.username;
          global.mobilephone = resData.mobilephone;
          global.email = resData.email;
          global.address = resData.address;
          setPassword('');
          setUsername(''), navigation.navigate('BottomNavigation');
        }
      });
  };

  return (
    <View style={styles.ground}>
      <View style={styles.foreground}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.continue}>Sign-in to continue</Text>

        <View style={styles.inputsBox}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={text => setUsername(text)}></TextInput>

          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.ask}>Don't have account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CustomerRegistration')}>
          <Text style={styles.registerButton}>Register Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ground: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
  foreground: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
  welcome: {
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
  },
  continue: {
    color: 'black',
    fontSize: 22,
  },
  inputsBox: {
    marginTop: 70,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 15,
    fontSize: 18,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 30,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ask: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 16,
  },
  registerButton: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomerSignIn;
