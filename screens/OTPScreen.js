import React, { useState, useRef, useEffect } from 'react';
import {View, Dimensions, Text, Alert, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native';

const OtpScreen = ( {navigation} ) => {
    const [otp, setOtp] = useState('');
    const [isSelected, setSelection] = useState(false);

    const [otpError, setOtpError] = useState('');
    let x = global.email;

    const verifyEmail = async () => {
        // await fetch('http://10.0.2.2:8000/api/verifyEmail', {
        //   method:'POST',
        //   headers:{
        //     'Accept':'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     'email':x,
        //      'otp':otp
        //   })
        // }).then(res => res.json())
        // .then(resData =>{
        //   if ("error" in resData) {
        //     Alert.alert('Error', 'Incorrect OTP')
        //   } else {
        //     Alert.alert('Success', 'Your email has been verified successfully!');
        //     navigation.navigate('CustomerSignIn')
        //   }
        // });
        try
        {
          const response = await fetch('https://agrikonnect.herokuapp.com/api/verifyEmail', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'email': x,
              'otp': otp
            })
          });

          const data = await response.json()
          if(data.status === 200)
          {
            Alert.alert('Success', 'Your account has been verified successfully!. Enjoy Shopping!');
            navigation.navigate('CustomerSignIn')
          }
          else
          {
            Alert.alert('Error', 'Invalid OTP. Please check the otp caode we sent to your email.')
          }
          
        }
        catch (error)
        {
          // console.error(error);
        }
    }

    return(
        <View style = {styles.ground}>   
            <View style={styles.foreground}>
            <ScrollView>
            <Text style={styles.create}>Account Verification</Text>
            <Text style={styles.subcreate}>Enter your OTP (One Time Password)</Text>

            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setOtp(text)] }
            placeholder='Enter the code'
            placeholderTextColor= 'gray'
            maxLength={6} 
            keyboardType='numeric'
            />
            {otpError ? <Text style = {{color: 'red'}}>{otpError}</Text> : null}
            <TouchableOpacity activeOpacity={.6} style = { styles.btn } onPress={ verifyEmail }>
                <Text style = {styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
            </ScrollView>
            


        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ground: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    justifyContent: 'center',
    },
    foreground: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'space-around',
      marginTop: '60%',
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
    header: {
    fontSize: 30,
    color: 'green',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: 'bold'
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
      marginTop: 40,
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
    fontSize: 18,
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    },
    btn:{
    backgroundColor: 'green',
    color: 'white',
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 50,
    },
});

export default OtpScreen