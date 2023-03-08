import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

/*Icons Library-Start*/
import { AntDesign } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
/*Icons Library-End*/

const PasswordEdit = ({navigation}) => {
  let id = global.id;

  const [password, setPassword] = useState(global.setPassword);

  const getPassword = async () => {
    try {
      const response = await fetch(
        `https://agrikonnect.herokuapp.com/api/editPassword/${id}`,
      );
      const json = await response.json();
      setPassword(json.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPassword();
  }, []);

  const updatePassword = async () => {
    try 
    {
      const response = await fetch(
        `https://agrikonnect.herokuapp.com/api/updatePassword/${id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'applicaton/json',
          },
          body: JSON.stringify({
            password: password,
          }),
        },
      );
      
      // console.log(response.status)
      if (response.status === 200) {
        setPassword('');
        console.log(password);
        const json = await response.json();
        Alert.alert('Password Updated Successfully');
        navigation.navigate('EditPassword');
      }
      else
      {
        Alert.alert('Error', 'Password Field Required')
      }
      } catch (error) {
        // console.error(error);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.mPBox, styles.topBG]}>
        <TouchableOpacity>
          <Text style={styles.leftIcon}>
            <AntDesign name="arrowleft" size={25} color="white" 
            onPress={() => navigation.navigate('Account')}/>
          </Text>
        </TouchableOpacity>
        <Text style={styles.name}>Password</Text>
      </View>

      <View style={styles.ground}>
        <View style={styles.foreground}>
          <View style={styles.inputsBox}>
            <Text style={styles.inputsTitle}>NEW PASSWORD</Text>
            <View style={styles.input}>
              <TextInput
                onChangeText={text => [setPassword(text)]}
                placeholder="Enter new password"
                value={password}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={updatePassword}>
            <Text style={styles.buttonText}>SAVE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    color: '#F4F4F4',
    paddingTop: 50,
  },
  ground: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    justifyContent: 'center',
  },
  foreground: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: '1%',
    marginLeft: '4%',
    marginRight: '4%',
    alignItems: 'center',
  },
  topBG: {
    width: '100%',
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mPBox: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  leftIcon: {
    marginLeft: '20%',
  },
  inputsBox: {
    marginTop: 50,
    alignSelf: 'flex-start',
  },
  inputsTitle: {
    color: 'black',
    fontSize: 14,
  },
  input: {
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 360,
    marginBottom: 10,
    height: 40,
  },

  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 5,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordEdit;
