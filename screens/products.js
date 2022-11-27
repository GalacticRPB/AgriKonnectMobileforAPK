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

const Products = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.sBarBG}>
        <View style={styles.searchbar}>
        <FontAwesome name='search' color={'gray'} size={15} iconStyle={''}/>
        <TextInput 
          placeholder='Search Product'/>
        </View>
        </View>

        <View style = {styles.ground}>
        <View style = {styles.foreground}>
        <View style = {[styles.mPBox]}>
            <Text style = {styles.myProducts}>
                My Products
            </Text>
            <TouchableOpacity style = {styles.addButton} onPress={()=> navigation.navigate('AddProduct')}>
            <FontAwesome5 name='plus' color={'white'} size={30} iconStyle={''}/>
            </TouchableOpacity>
        </View>

        <View style = {[styles.rSoldBox, styles.elevation]}>
        <View style={styles.rectangleSold} />
          <View style={styles.soldItem}>
            <Text style={styles.itemName}>
              Durian
            </Text>
            <Text>
              Quantity: 25 Kilos
            </Text>
          </View>
          <View style={styles.bottom}>
          <TouchableOpacity style = {styles.editButton} onPress={()=> navigation.navigate('EditProduct')}>
            <Text style = {styles.editButtonText}>
              Edit
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.deleteButton}>
            <Text style = {styles.deleteButtonText}>
              Remove
              </Text>
          </TouchableOpacity>
        </View>
        </View>


    </View>
    </View>
    </ScrollView>
  );
}

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
      marginTop: '5%',
      marginLeft: '4%',
      marginRight: '4%',
    },
    myProducts:{
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    rSoldBox:{
      marginTop: 15,
      backgroundColor: "white",
      flexDirection: "row",
      flexWrap: 'nowrap',
      borderRadius: 8,
      height: 100,
      padding: 10,
      alignItems: 'center',

    },
    elevation: {
      elevation: 10,
      shadowColor: 'black',
    },  
    rectangleSold: {
      width: 70,
      height: 70,
      borderRadius: 1,
      backgroundColor: "#388E3C",
      marginRight: 20,
    },
    itemName:{
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
    },
    soldItem:{
  
    },
    bottom:{
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 5,

    },
    editButton:{
      backgroundColor: 'orange',
      borderRadius: 2,

      height: 30,
      width: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    editButtonText:{
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    deleteButton:{
      backgroundColor: 'red',
      borderRadius: 2,
      marginTop: 10,
      height: 30,
      width: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteButtonText:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    sBarBG: {
        width: '100%',
        height: 90,
        backgroundColor: "#388E3C",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%',
    },
    searchbar:{
      width: '90%',
      height: '50%',
      borderRadius: 5,
      backgroundColor: "white",
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '2%',
      flexDirection: "row",
    },
    mPBox:{
      flexDirection: "row",
      flexWrap: 'nowrap',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    addButton:{
      backgroundColor: 'green',
      borderRadius: 3,
      height: '100%',
      width: '15%',
      alignSelf: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  
  })

export default Products;