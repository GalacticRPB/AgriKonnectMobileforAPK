import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const EditCustomerProfile = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'column', alignItems: 'center',}}>
                    <TouchableOpacity style = {styles.userButton}>
                    <FaIcons name='user-edit' color={'white'} size={50}/>
                    </TouchableOpacity>
                    <Text style = {styles.username}>
                        User
                    </Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.TitleInput}> Name </Text>
                        <TextInput 
                        placeholder='Name'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    <Text style={styles.TitleInput}> Phone Number</Text>
                        <TextInput 
                        placeholder='Phone Number'
                        style = {styles.input} 
                        keyboardType='numeric'>
                        </TextInput>
                    <Text style={styles.TitleInput}> Email</Text>
                        <TextInput 
                        placeholder='Email'
                        style = {styles.input} 
                        keyboardType='email'>
                        </TextInput>
                    <Text style={styles.TitleInput}> Change Password</Text>
                        <TextInput 
                        placeholder='New Password'
                        style = {styles.input} 
                        keyboardType='password'>
                        </TextInput>
                    <Text style={styles.TitleInput}>Barangay</Text>
                        <TextInput 
                        placeholder='Barangay'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    <Text style={styles.TitleInput}>Street/Subdivision/Building Name</Text>
                        <TextInput 
                        placeholder='Street/Subdivision/Building Name'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity>
                            <Text style={styles.savebutton}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
    )
}

export default EditCustomerProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    buttoncontainer: {
        backgroundColor:'green',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
    },
    userButton:{
        backgroundColor: 'green',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    username:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    TitleInput:{
        color: '#5F5B5B',
        margin: 10,
    },
    input:{
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        fontSize: 18,
        padding: 12,
        margin: 10
    },
    savebutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
})
