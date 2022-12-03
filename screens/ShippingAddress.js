import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Aicon from 'react-native-vector-icons/AntDesign';

const ShippingAddress = ({navigation}) => {
    return (
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icons name= 'arrow-back' size={50}/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}>Select Shipping Address </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.subcontainer}>
                        <TouchableOpacity style={styles.ButtonContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Image style={styles.location} source={require('../assets/location.png')}/>
                                <Text style={styles.address}>Address</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('EditAddress')}>
                                    <Text style={styles.editButton}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddAddress')}>
                            <Text style={styles.addbutton}>
                            <Aicon name='plus' size={15}/> ADD ADDRESS</Text>
                        </TouchableOpacity>
                </View>
        </View>
    )
}

export default ShippingAddress;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        padding: 10,
    },
    subcontainer:{
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    ButtonContainer:{
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    location: {
        width: 50,
        height: 50,
    },
    address:{
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        color: '#000000',
        marginLeft: -150
    },
    editButton:{
        textDecorationLine: 'underline',
        color: '#37893B'
    },
    addbutton:{
        borderColor: '#37893B',
        borderRadius: 20,
        borderWidth: 1,
        color: '#37893B',
        fontWeight: 'bold',
        padding: 10,
    },
})