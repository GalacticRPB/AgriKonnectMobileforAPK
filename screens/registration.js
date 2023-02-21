import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // not react-native-image-picker


const Registration = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [mobilephone, setMobilephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [brgy, setAddress] = useState('');
  const [isError, setError] = useState(false)

  const handleCheckbox = () => {
    setPrivacy(!privacy)
    setError(false)
  }

  const RegisterSeller = async () => {
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('middlename', middlename);
    formData.append('lastname', lastname);
    formData.append('username', username);
    formData.append('mobilephone', mobilephone);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('brgy', brgy);
    formData.append('privacy', false);
    formData.append('verified', false);
    formData.append('image', {
      uri: selectedImage[0].uri,
      type: 'image/jpeg',
      name: selectedImage[0].uri.substring(
        selectedImage[0].uri.lastIndexOf('/') + 1,
        selectedImage[0].uri.length,
      ),
    });

    const response = await fetch('http://10.0.2.2:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    if(!privacy)
    {
      setError(true)
      return;
    }

    if (response.status === 200) {
      Alert.alert('Success', 'Registration Successful', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SellerSignIn'),
        },
      ]);
    } else {
      Alert.alert('Error', 'Registration Failed', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  const launchImageLibraryHandler = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    }).then(selectedImg => {
      setSelectedImage(selectedImg.assets);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.ground}>
        <View style={styles.foreground}>
          <Text style={styles.create}>Create an Account</Text>
          <Text style={styles.subcreate}>Sign up as a Seller</Text>
          <View style={styles.inputsBox}>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              onChangeText={text => setFirstname(text)}
            />

            <TextInput
              placeholder="Middle Name"
              style={styles.input}
              onChangeText={text => setMiddlename(text)}
            />

            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={text => setLastname(text)}
            />

            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={text => setUsername(text)}
            />

            <TextInput
              placeholder="Email "
              style={styles.input}
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              placeholder="Mobile Phone "
              style={styles.input}
              onChangeText={text => setMobilephone(text)}
            />

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />

            <View style={styles.imageBox}>
              <Text style={styles.imageFilename} numberOfLines={1}>
                {selectedImage.length > 0
                  ? selectedImage[0].uri.substring(
                      selectedImage[0].uri.lastIndexOf('/') + 1,
                      selectedImage[0].uri.length,
                    )
                  : 'Choose an image'}
              </Text>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={launchImageLibraryHandler}>
                <Text style={styles.imageButtonText}>Select Image</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Address"
              style={styles.input}
              onChangeText={text => setAddress(text)}
            />

    <CheckBox value={privacy} onValueChange={handleCheckbox} required={true}>
        </CheckBox>
     <Text>
     I hereby authorize AgriKOnnect to collect and process the data indicated herein for the purpose of the usage of the application. I understand that my personal information is protected by RA 10173, Data Privacy Act of 2012.
      </Text>
      {isError && <Text style = {{color: 'red'}}>This field is required</Text>}

          </View>

          <TouchableOpacity style={styles.button} onPress={RegisterSeller}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.ask}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SellerSignIn')}>
            <Text style={styles.loginButton}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    color: '#F4F4F4',
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  create: {
    color: 'green',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subcreate: {
    fontSize: 20,
    alignSelf: 'center',
  },
  inputsBox: {
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 30,
    marginTop: 20,
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
    marginTop: 10,
    fontSize: 16,
  },
  loginButton: {
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
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  dropdown1DropdownStyle: {backgroundColor: 'white'},
  dropdown1RowStyle: {backgroundColor: 'green', borderBottomColor: 'green'},
  dropdown1RowTxtStyle: {color: 'white', textAlign: 'left'},
  imageBox: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageFilename: {
    maxWidth: 200,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  imageButton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 4,
  },
  imageButtonText: {
    color: 'white',
  },
});

export default Registration;
