import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const EditCustomerProfile = ({navigation}) => {

    let customer_id = global.id;

    const [firstname, setFirstname] = useState([]);
    const [middlename, setMiddlename] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [mobilephone, setMobilephone] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [address, setAddress] = useState([]);
    const [customerInfo, setCustomer] = useState([]);

    console.log(customerInfo)
    const getCustomerInfo = async () => {
        try
        {
            const response = await fetch(`http://10.0.2.2:8000/api/editCustomer/${customer_id}`);
            const json = await response.json();
            setCustomer(json.customer);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCustomerInfo();
    }, []);

    const updateUser = async () => {
        try
        {
            const response = await fetch(`http://10.0.2.2:8000/api/updateCustomer/${customer_id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstname,
                    middlename: middlename,
                    lastname: lastname,
                    mobilephone: mobilephone,
                    password: password,
                    email: email,
                    address: address
                })
            });

            if ((response).status === 200)
            {
                setFirstname('');
                setMiddlename('');
                setLastname('');
                setMobilephone('');
                setPassword('');
                setEmail('');
                setAddress('');
                console.log(firstname, middlename, lastname, mobilephone, password, email, address);
                const json = await response.json();
                Alert.alert("Customer Updated Successfully");
                navigation.navigate('Profile');
            }
        }catch (error)
        {
            console.error(error)
        }
    }
    console.log("customer update")
    
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
                        {global.username}
                    </Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.TitleInput}> First Name </Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setFirstname(text)] }
                        placeholder='First Name'
                        defaultValue = {customerInfo.firstname}>
                        </TextInput>
                        <Text style={styles.TitleInput}> Middle Name </Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setMiddlename(text)] }
                        placeholder='Middle Name'
                        defaultValue = {customerInfo.middlename}>
                        </TextInput>
                        <Text style={styles.TitleInput}> Last Name </Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setLastname(text)] }
                        placeholder='Last Name'
                        defaultValue = {customerInfo.lastname}>
                        </TextInput>
                    <Text style={styles.TitleInput}> Phone Number</Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setMobilephone(text)] }
                        placeholder='Phone Number'
                        defaultValue = {customerInfo.mobilephone}
                        keyboardType='numeric'>
                        </TextInput>
                    <Text style={styles.TitleInput}> Email</Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setEmail(text)] }
                        placeholder='Email'
                        defaultValue = {customerInfo.email}>
                        </TextInput>
                    <Text style={styles.TitleInput}> Change Password</Text>
                        <TextInput 
                        style = {styles.input} 
                        onChangeText = { (text) => [setPassword(text)] }
                        placeholder='Password'
                        defaultValue = {customerInfo.password}>
                        </TextInput>
                    <Text style={styles.TitleInput}>Barangay/City</Text>
                        <TextInput 
                       style = {styles.input} 
                       onChangeText = { (text) => [setAddress(text)] }
                       placeholder='Barangay/City'
                       defaultValue = {customerInfo.address}>
                        </TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity onPress={ updateUser }>
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
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
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
