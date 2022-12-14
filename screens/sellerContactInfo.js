import React from 'react';
import {Text, View,StyleSheet,TextInput, TouchableOpacity, ScrollView} from 'react-native';

/*Icons Library-Start*/
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
/*Icons Library-End*/

const ContactInfoEdit = ({navigation}) => {
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style = {[styles.mPBox, styles.topBG]}>
            <TouchableOpacity>
                <Text style = {styles.leftIcon}>
                    <Ionicons name="arrow-back" size={25} color="white" onPress={()=> navigation.navigate('Account')}/>
                </Text>
            </TouchableOpacity>
            <Text style = {styles.name}>Contact Information</Text>
        </View>

        <View style = {styles.ground}>
        <View style = {styles.foreground}>

            <TouchableOpacity style = {styles.picEdit}>
                <MaterialCommunityIcons name="account" size={50} color="green" />
            </TouchableOpacity>
            <ScrollView>
            <View style = {styles.inputsBox}> 

                    <Text style = {styles.inputsTitle}>First Name</Text>
                    <View style = {styles.input}>
                        <Text>{global.firstname}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Middle Name</Text>
                    <View style = {styles.input}>
                        <Text>{global.middlename}</Text>
                    </View>

                    <Text style = {styles.inputsTitle}>Last Name</Text>
                    <View style = {styles.input}>
                        <Text>{global.lastname}</Text>
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
            
        </View>
        </View>
    </ScrollView>
    );}
    
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        color: '#F4F4F4',
        paddingTop: 50,
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