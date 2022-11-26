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

const Transaction = () => {
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

    <View style={styles.sBarBG}>
    <Text style = {styles.name}>Transactions</Text>
    </View>

    <View style = {styles.ground}>
    <View style = {styles.foreground}>
    <View style = {[styles.rSoldBox, styles.elevation]}>
        <View style={styles.rectangleSold} />
          <View style={styles.soldItem}>
          <Text style={styles.itemDate}>
              June 11, 2022
            </Text>
            <Text style={styles.itemName}>
              Durian
            </Text>
            <Text style={styles.itemWeight}>
              Quantity: 25 Kilos
            </Text>
          </View>
          <View style={styles.bottom}>
          <View style = {styles.deliveredButton}>
            <Text style = {styles.deliveredButtonText}>
              DELIVERED
              </Text>
          </View>
        </View>
        </View>

        <View style = {[styles.rSoldBox, styles.elevation]}>
        <View style={styles.rectangleSold} />
          <View style={styles.soldItem}>
          <Text style={styles.itemDate}>
              September 30, 2022
            </Text>
            <Text style={styles.itemName}>
              Balinghoy
            </Text>
            <Text style={styles.itemWeight}>
              Quantity: 25 Kilos
            </Text>
          </View>
          <View style={styles.bottom}>
          <TouchableOpacity style = {styles.cancelledButton}>
            <Text style = {styles.cancelledButtonText}>
              CANCELLED
              </Text>
          </TouchableOpacity>
        </View>
        </View>
        
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
    sBarBG: {
        width: '100%',
        height: 70,
        backgroundColor: "#388E3C",
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
       
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
      itemDate:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
      },
      itemName:{
        color: 'black',
        fontSize: 16,

      },
      itemWeight:{
        fontSize: 12,
      },
      soldItem:{
    
      },
      bottom:{
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5,
  
      },
      deliveredButton:{
        backgroundColor: 'orange',
        borderRadius: 2,
        height: 30,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
      deliveredButtonText:{
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
      },
      cancelledButton:{
        backgroundColor: 'red',
        borderRadius: 2,
        height: 30,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cancelledButtonText:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
})

export default Transaction;