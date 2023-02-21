import React, { useState, useRef, useEffect } from 'react';
import {View, Dimensions, Text, Alert, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native';

const OtpScreen = ( {navigation} ) => {
    const [otp, setOtp] = useState('');
    const [isSelected, setSelection] = useState(false);

    let x = global.email;


    const test = () => {
      alert("Test");
    }

    const verifyEmail = async () => {
        await fetch('http://10.0.2.2:8000/api/verifyEmail', {
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'email':x, 'otp':otp})
        }).then(res => res.json())
        .then(resData =>{
          if ("error" in resData) {
            Alert.alert('Error', 'Incorrect OTP')
          } else {
            Alert.alert('Success', 'Your email has been verified successfully!');
            navigation.navigate('CustomerSignIn')
          }
        })
    }

    return(
        <View style = { styles.body }>

                
            <KeyboardAvoidingView style={styles.whiteBox}>
            <ScrollView>
            <Text style = { styles.header }>Verify Email</Text>

            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setOtp(text)] }
            placeholder='Enter Otp'
            placeholderTextColor= 'gray'
            maxLength={6} 
            keyboardType='numeric'
            />

            <TouchableOpacity activeOpacity={.6} style = { styles.btn } onPress={ verifyEmail }>
                <Text style = {styles.btnText}>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style = {styles.btnText2}></Text>
            </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>
            <View style = {{ backgroundColor: 'white', 
            width: Dimensions.get('window').width,
            height: 300, }}>

            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
    backgroundColor: 'green',
    flex: 1,
    fontFamily: 'Roboto',
    },
    userIcon: {
    width:20,
    height:20,
    marginLeft: 300,
    marginTop: -35
    },
    whiteBox: {
    width: Dimensions.get('window').width,
    height: 280,
    marginTop: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 10,
    shadowColor: 'white',
    shadowOpacity: 1,
    backgroundColor: 'white',
    },
    header: {
    fontSize: 30,
    color: 'green',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: 'bold'
    },
    input: {
    padding: 2,
    width: 300,
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    shadowRadius: 10,
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
    },
    textFailed: {
    color: 'red',
    marginLeft: 30,
    marginTop: 10,
    },
    checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    },
    checkbox: {
    marginLeft: 30,
    },
    label: {
    marginLeft: 60,
    marginTop: -25,
    fontSize: 14,
    color: 'gray',
    },
    btnText:{
    color: 'white',
    fontSize: 14,
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    },
    btn:{
    backgroundColor: 'green',
    color: 'white',
    width: 300,
    height: 35,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    },
});

export default OtpScreen