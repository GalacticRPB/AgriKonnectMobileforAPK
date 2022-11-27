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
/*Icons Library-End*/

const TransactionDetails = ({navigation}) => {
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

    <View style = {[styles.mPBox]}>
        <TouchableOpacity>
        <Text style = {styles.leftIcon}>
            <FontAwesome5 name="arrow-left" color={'white'} size={25} iconStyle={''} onPress={()=> navigation.navigate('Home')}/>
        </Text>
        </TouchableOpacity>
    <Text style = {styles.name}>Transaction Details</Text>
    </View>


    <View style = {styles.ground}>
        <View style = {styles.headerBG}>
            <Text style = {styles.header}>
                Order Completed
            </Text>
        </View>
        <View style = {styles.productOrderBG}>
            <Text style = {styles.sectionHeader}>Product Order</Text>
            <View style = {styles.productOrderDetails1}>
                <View style={styles.rectangleSold} />
                <View>
                <Text style = {styles.itemName}>Patatas</Text>
                <Text>Unit Price: Php. 20.80</Text>
                <Text>Quantity: 25 Kg.</Text>
                </View>
            </View>
                <View style = {styles.productOrderDetails}>
                <Text>Product Price</Text>
                <Text>Php. 520.00</Text>
                </View>
                <View style = {styles.productOrderDetails}>
                <Text>Shipping Fee</Text>
                <Text>Php. 10.00</Text>
                </View>
                <View style = {styles.productOrderDetails}>
                <Text style = {styles.productOrderDetailsTotal}>Order Total</Text>
                <Text style = {styles.productOrderDetailsTotal}>Php. 530.00</Text>
                </View>
            </View>
        

        <View style = {styles.productOrderBG}>
            <Text style = {styles.sectionHeader}>
                Buyer Details
            </Text>
            <Text>
                Althea Dianne L. Baculi
            </Text>
            <Text>
                (+63) 912 3456 789
            </Text>
            <Text>
                Brgy. Lalo Tayabas, Quezon
            </Text>
        </View>

        <View style = {styles.productOrderBG}>
            <Text style = {styles.sectionHeader} >Mode Of Payment </Text>
            <Text>Cash on Delivery</Text>
        </View></View>
    </ScrollView>
    );}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        color: '#F4F4F4',
    },
    mPBox:{
        backgroundColor: 'green',
        flexDirection: "row",
        flexWrap: 'nowrap',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    leftIcon:{
        justifyContent:'flex-start',
        marginLeft: '25%',
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    ground:{
        backgroundColor: '#F4F4F4',
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    headerBG:{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginBottom: 10,
    },
    header:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    productOrderBG:{
        backgroundColor: 'white',
        borderRadius:10,
        borderRadius: 8,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
    },
    productOrderDetails1: {
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: 'center',  
        justifyContent: 'flex-start',  
        marginBottom: 10,    
    },
    productOrderDetails: {
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: 'center',  
        justifyContent: 'space-between',      
    },
    productOrderDetailsTotal: {
        fontWeight: 'bold',
        color: 'black',
    },
    rectangleSold: {
        width: 100,
        height: 100,
        borderRadius: 1,
        backgroundColor: "#388E3C",
        marginRight: 20,
      },
    itemName:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    sectionHeader:{
        color: 'green',
        fontWeight:'bold',
        fontSize: 20,
        marginBottom: 5,
    },
})

export default TransactionDetails;