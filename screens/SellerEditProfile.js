import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EditProfile = ({navigation, route}) => {
  let id = global.id;

  const [firstname, setFirstname] = useState(global.firstname);
  const [middlename, setMiddlename] = useState(global.middlename);
  const [lastname, setLastname] = useState(global.lastname);
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState(global.gender);
  const [username, setUsername] = useState(global.username);
  const [mobilephone, setMobilePhone] = useState(global.mobilephone);
  const [email, setEmail] = useState(global.email);
  const [brgy, setBrgy] = useState(global.brgy);
  const [dataInfo, setDataInfo] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setBirthdate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: birthdate,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getUserInfo = async () => {
    try {
      const response = await fetch(`https://agrikonnect.herokuapp.com/api/edit/${id}`);
      const json = await response.json();
      setDataInfo(json.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const updateUser = async () => {
    try {
      const response = await fetch(`https://agrikonnect.herokuapp.com/api/update/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname,
          middlename: middlename,
          lastname: lastname,
          birthdate: birthdate.toLocaleDateString(),
          gender: gender,
          username: username,
          mobilephone: mobilephone,
          email: email,
          brgy: brgy,
        }),
      });

      if (response.status === 200) {
        setFirstname('');
        setMiddlename('');
        setLastname('');
        setUsername('');
        setGender('');
        setMobilePhone('');
        setEmail('');
        setBrgy('');
        console.log(
          firstname,
          middlename,
          lastname,
          username,
          birthdate,
          gender,
          mobilephone,
          email,
          brgy,
        );
        const json = await response.json();
        Alert.alert('User Account Updated Successfully!');
        navigation.navigate('ContactInfoEdit');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.mPBox, styles.topBG]}>
        <TouchableOpacity>
          <Text style={styles.leftIcon}>
            <FontAwesome5
              name="arrow-left"
              color={'white'}
              size={25}
              iconStyle={''}
              onPress={() => navigation.navigate('Account')}
            />
          </Text>
        </TouchableOpacity>
        <Text style={styles.name}>Contact Information</Text>
      </View>

      <View style={styles.ground}>
        <View style={styles.foreground}>
          <TouchableOpacity style={styles.picEdit}>
            <FontAwesome5
              name="user-edit"
              color={'green'}
              size={50}
              iconStyle={''}
            />
          </TouchableOpacity>

          <ScrollView>
            <View style={styles.inputsBox}>
              <Text style={styles.inputsTitle}>First Name</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setFirstname(text)]}
                  placeholder="First Name"
                  defaultValue={firstname}
                />
              </View>

              <Text style={styles.inputsTitle}>Middle Name</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setMiddlename(text)]}
                  placeholder="Middle Name"
                  defaultValue={middlename}
                />
              </View>

              <Text style={styles.inputsTitle}>Last Name</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setLastname(text)]}
                  placeholder="Last Name"
                  defaultValue={lastname}
                />
              </View>

              <Text style={styles.inputsTitle}>Username</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setUsername(text)]}
                  placeholder="Username"
                  defaultValue={username}
                />
              </View>

              <Text>{birthdate.toLocaleDateString()}</Text>
              <TouchableOpacity
                style={styles.btnBirthdate}
                onPress={showDatepicker}
                title="Show date picker!">
                <Text style={styles.btnText}>Select Birthdate</Text>
              </TouchableOpacity>

              <Text style={styles.inputsTitle}>Gender</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setGender(text)]}
                  placeholder="Gender"
                  defaultValue={gender}
                />
              </View>

              <Text style={styles.inputsTitle}>Phone Number</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setMobilePhone(text)]}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  defaultValue={mobilephone}
                />
              </View>

              <Text style={styles.inputsTitle}>Email</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setEmail(text)]}
                  placeholder="Email"
                  defaultValue={email}
                />
              </View>

              <Text style={styles.inputsTitle}>Baranggay</Text>
              <View style={styles.input}>
                <TextInput
                  onChangeText={text => [setBrgy(text)]}
                  placeholder="Barangay"
                  defaultValue={brgy}
                />
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={updateUser}>
            <Text style={styles.buttonText}>Save Profile</Text>
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
    paddingTop: 50,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  elevation: {
    elevation: 10,
    shadowColor: 'black',
  },
  mPBox: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  leftIcon: {
    marginLeft: '20%',
  },
  picEdit: {
    backgroundColor: 'lightgray',
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputsBox: {
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
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnBirthdate: {
    backgroundColor: 'rgb(80, 140, 2)',
    color: 'white',
    width: 150,
    height: 35,
    borderRadius: 5,
    marginLeft: 110,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default EditProfile;
