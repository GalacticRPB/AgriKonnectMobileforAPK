import React from 'react';
import {Text, View,StyleSheet,TextInput, TouchableOpacity, ScrollView} from 'react-native';

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
/*Icons Library-End*/

const ContactInfoEdit = ({navigation}) => {
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style = {[styles.mPBox, styles.topBG]}>
            <TouchableOpacity>
                <Text style = {styles.leftIcon}>
                    <FontAwesome5 name="arrow-left" color={'white'} size={25} iconStyle={''} onPress={()=> navigation.navigate('Account')}/>
                </Text>
            </TouchableOpacity>
            <Text style = {styles.name}>Contact Information</Text>
        </View>

        <View style = {styles.ground}>
        <View style = {styles.foreground}>

            <TouchableOpacity style = {styles.picEdit}>
                <FontAwesome5 name="user-edit" color={'green'} size={50} iconStyle={''}/>
            </TouchableOpacity>
            <ScrollView>
            <View style = {styles.inputsBox}> 

                    <Text style = {styles.inputsTitle}>First Name</Text>
                    <View style = {styles.input}>
                        <Text>{global.firstname} {global.middlename} {global.lastname}</Text>
                    </View>
                    
                    <Text style = {styles.inputsTitle}>Birthdate</Text>
                    <View style = {styles.input}>
                        <Text>{ global.birthdate}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Gender</Text>
                    <View style = {styles.input}>
                        <Text>{global.gender}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Email</Text>
                    <View style = {styles.input}>
                    <Text>{global.email}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Phone Number</Text>
                    <View style = {styles.input}>
                    <Text>{global.mobilephone}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Address</Text>
                    <View style = {styles.input}>
                    <Text>{global.brgy}</Text>
                    </View>
                    </View>
            </ScrollView>
            


            <TouchableOpacity 
                style = {styles.button}
                onPress={ () => navigation.navigate('EditProfile')}>
                <Text style = {styles.buttonText}>
                    EDIT PROFILE</Text>
            </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
    );}
    
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
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
        marginTop: '1%',
        marginLeft: '4%',
        marginRight: '4%',
        alignItems: 'center',
    },
    topBG: {
        width: '100%',
        height: 70,
        backgroundColor: "green",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',   
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    mPBox:{
        flexDirection: "row",
        flexWrap: 'nowrap',
    },
    leftIcon:{
        marginLeft: '20%',
    },
    picEdit:{
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        borderRadius: 100/2,
        padding: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    inputsBox:{
        alignSelf: 'flex-start',
      },
    inputsTitle:{
        color: 'black',
        fontSize: 14,

    },
    input:{
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 360,
        marginBottom:10,
        height: 40,
    },


    button:{
        backgroundColor: 'green',
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
        
export default ContactInfoEdit;