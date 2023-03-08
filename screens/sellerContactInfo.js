import React, {useEffect, useState} from 'react';
import {Text, View,StyleSheet,TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';

/*Icons Library-Start*/
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
/*Icons Library-End*/

const ContactInfoEdit = ({navigation}) => {

    let id = global.id;

    const [username, setUsername ] = useState(global.setUsername);

    const getUsername = async () => {
        try
        {
            const response = await fetch(
                `https://agrikonnect.herokuapp.com/api/edit/${id}`,
            );
            const json = await response.json();
            setUsername(json.user);
        }
        catch (error)
        {
            console.error(error);
        }
    };

     useEffect(() => {
        getUsername();
    }, []);

    const updateUsername = async () => {
        try
        {
            const response = await fetch(
                `https://agrikonnect.herokuapp.com/api/update/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                    }),
                },
            );

            console.log(response.status)
            if (response.status === 200) {
                setUsername('');
                console.log(username);
                const json = await response.json();
                Alert.alert('Username Updated Successfully');
                navigation.navigate('ContactInfoEdit');
            }
            else
            {
                Alert.alert('Error', 'Please provide your new username')
            }
        }
         catch (error) {
        console.error(error);
        }
        
    }
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

                    <Text style = {styles.inputsTitle}>Username</Text>
                    <View style = {styles.input}>
                        {/* <Text>{global.username}</Text> */}
                        <TextInput
                            onChangeText={text => [setUsername(text)]}
                            placeholder="Enter new username"
                            value={username}
                        >
                        </TextInput>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.button} onPress={updateUsername}>
                        <Text style={styles.buttonText}>UPDATE USERNAME</Text>
                    </TouchableOpacity>
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
        marginBottom: 0,
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
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
    },


    button:{
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
})
        
export default ContactInfoEdit;