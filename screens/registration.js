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

  //validation

  const [firstnameError, setFirstNameError] = useState('');
  const [middlenameError, setMiddleNameError] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobilephoneError, setMobilePhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [privacyError, setPrivacyError] = useState('');

  const handleCheckbox = () => {
    setPrivacy(!privacy)
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
    formData.append('privacy', privacy ? 1 : 0);
    formData.append('verified', false);
    formData.append('image', {
      uri: selectedImage[0].uri,
      type: 'image/jpeg',
      name: selectedImage[0].uri.substring(
        selectedImage[0].uri.lastIndexOf('/') + 1,
        selectedImage[0].uri.length,
      ),
    });

    const response = await fetch('https://agrikonnect.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        Accept: 'multipart/form-data',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })

    const data = await response.json()
    // console.log(data);
    if (data.status === 200) {
      Alert.alert('Success', 'Registration Successful', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SellerSignIn'),
        },
      ]);
      // Alert.alert('Success', 'Product Added Successfully!');

    }
    else 
    {
      console.log(data.errors)
      if(data)
      {
        const {firstname, middlename, lastname, username, email, mobilephone, password, brgy, privacy} = data.errors;
        if(firstname)
        {
          setFirstNameError(firstname[0]);
        }
        if(middlename)
        {
          setMiddleNameError(middlename[0]);
        }
        if(lastname)
        {
          setLastNameError(lastname[0]);
        }
        if(username)
        {
          setUsernameError(username[0]);
        }
        if(email)
        {
          setEmailError(email[0]);
        }
        if(mobilephone)
        {
          setMobilePhoneError(mobilephone[0]);
        }
        if(password)
        {
          setPasswordError(password[0]);
        }
        if(brgy)
        {
          setAddressError(brgy[0]);
        }
        if(privacy)
        {
          setPrivacyError(privacy[0]);
        }
      }
      else
      {
        console.error(data)
      }
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
            {firstnameError ? <Text style = {{color: 'red'}}>{firstnameError}</Text> : null}
            <TextInput
              placeholder="Middle Name"
              style={styles.input}
              onChangeText={text => setMiddlename(text)}
            />
            {middlenameError ? <Text style = {{color: 'red'}}>{middlenameError}</Text> : null}
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={text => setLastname(text)}
            />
            {lastnameError ? <Text style = {{color: 'red'}}>{lastnameError}</Text> : null}
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={text => setUsername(text)}
            />
            {usernameError ? <Text style = {{color: 'red'}}>{usernameError}</Text> : null}
            <TextInput
              placeholder="Email "
              style={styles.input}
              onChangeText={text => setEmail(text)}
            />
            {emailError ? <Text style = {{color: 'red'}}>{emailError}</Text> : null}
            <TextInput
              placeholder="Mobile Phone "
              style={styles.input}
              onChangeText={text => setMobilephone(text)}
            />
            {mobilephoneError ? <Text style = {{color: 'red'}}>{mobilephoneError}</Text> : null}
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
            {passwordError ? <Text style = {{color: 'red'}}>{passwordError}</Text> : null}
            <TextInput
              placeholder="Address"
              style={styles.input}
              onChangeText={text => setAddress(text)}
            />
            {addressError ? <Text style = {{color: 'red'}}>{addressError}</Text> : null}
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

     <View style={styles.container}>
     <View style={styles.checkboxContainer}>
     <CheckBox style={styles.checkbox} value={privacy} onValueChange={handleCheckbox} required={true}/>     
     <Text style={styles.label}>
      I hereby authorize AgriKOnnect to collect and process the data indicated herein for the purpose of the usage of the application. I understand that my personal information is protected by RA 10173, Data Privacy Act of 2012.
      </Text>
      {privacyError ? <Text style = {{color: 'red'}}>{privacyError}</Text> : null}
      </View>
      </View>

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
    borderRadius: 10,
    width: '100%',
    height: 40,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    
  },
  label: {
    margin: 8,
    textAlign: 'justify',
    marginLeft: 25,
  },
});

export default Registration;
