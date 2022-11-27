import React from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

/*Icons Library-Start*/
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
/*Icons Library-End*/

const Account = () => {
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style = {styles.ground}>
        <View style = {styles.foreground}>
        <View style = {[styles.rSoldBox, styles.elevation]}>
        <TouchableOpacity style = {styles.logo}>
        <MCI name='account-circle' color={'gray'} size={100} iconStyle={''}/>
        </TouchableOpacity>
        <View style={styles.bottom}>
        <Text style = {styles.name}>Russell Barnes</Text>
          <Text style = {styles.eMail}>russell.barnes@agri.com</Text>
          </View>
        </View>
    
          
          <View style={styles.rectangle}>
          <TouchableOpacity>
          <View style = {[styles.mPBox]}>
          <View style = {styles.leftIcon}>
            <AntDesign name="contacts" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Contact Information
            </Text>
            <View style = {styles.rightIcon}>
            <MCI name='greater-than' color={'black'} size={25} iconStyle={''}/>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style = {[styles.mPBox]}>
          <View style = {styles.leftIcon}>
            <MCI name="lock" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Password
            </Text>
            <View style = {styles.rightIcon}>
            <MCI name='greater-than' color={'black'} size={25} iconStyle={''}/>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style = {[styles.mPBox]}>
          <View style = {styles.leftIcon}>
            <MCI name="message-star-outline" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Review
            </Text>
            <View style = {styles.rightIcon}>
            <MCI name='greater-than' color={'black'} size={25} iconStyle={''}/>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style = {[styles.mPBox]}>
          <Text style = {styles.leftIcon}>
            <Ionicons name="log-out-outline" color={'black'} size={25} iconStyle={''}/>
            </Text>
            <Text style = {styles.menubuttonText}>
                Logout
            </Text>
            <Text style = {styles.rightIcon}>
            <MCI name='greater-than' color={'black'} size={25} iconStyle={''}/>
            </Text>
        </View>
        </TouchableOpacity>

          </View>
        </View>
        </View>
        </ScrollView>
    );}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        color: 'green',
      },
      ground:{
        backgroundColor: 'white',
        flex:1,
        justifyContent: 'center',
      },
      foreground:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around',
      },
      rSoldBox:{
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: 'nowrap',
        height: 200,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottom:{
        flex: 1,
        marginLeft: 10, 
      },
      logo:{
        marginLeft: 20,
      },
      name:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },
      eMail:{
        fontSize: 12,
      },
      rectangle: {
        width: 'auto',
        height: 5000,
        borderRadius: 40,
        backgroundColor: "#388E3C",
        marginTop: 0,
        padding: 20,
        paddingTop: 100,
      },
      mPBox:{
        flexDirection: "row",
        flexWrap:'wrap',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 30,
      },
      leftIcon:{
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        marginLeft: 20,
        textAlignVertical: 'center',
      },
      menubuttonText:{
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 0,
        alignItems: 'flex-start',
      },
      rightIcon:{
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlignVertical: 'center',
      },
})

export default Account;