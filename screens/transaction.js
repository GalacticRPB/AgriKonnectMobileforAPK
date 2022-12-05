import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

const Transaction = ({navigation}) => {
  let user_id = global.id;

  const [transaction, setTransaction] = useState([]);

  const getTransaction = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8000/api/showOrder/${user_id}`);
      const json = await response.json();
      setTransaction(json.orders);
    }
    catch(error) {
      console.error(error);
    } 
  }
  console.log(transaction)
  useEffect(() => {
    getTransaction();
  }, []);
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

    <View style={styles.topBG}>
    <Text style = {styles.name}>Incoming Transactions</Text>
    </View>

    <View style = {styles.ground}>
    <View style = {styles.foreground}>
      
      <View style = {styles.tab}>

        <TouchableOpacity style = {styles.button} onPress={()=> navigation.navigate('Ongoing')}>
          <View style = {styles.ongoingBG}>
            <Text style = {styles.ongoingText}>Ongoing</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.button} onPress={()=> navigation.navigate('Delivered')}>
          <View style = {styles.deliveredBG}>
            <Text style = {styles.deliveredText}>Delivered</Text>
          </View>
        </TouchableOpacity>
      </View>
        <View style = {styles.rowFormat}>
            <FlatList
                style = {{ height: 450 }}
                data={transaction}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity style = {styles.item} onPress={ () => navigation.navigate('Ongoing', {item:item})}>
                    <Text style = {styles.header2}>Product Name: {item.order_name}</Text>
                    <View style={{borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth, margin: 3}}/>
                    <Text style = {styles.myProducts}>Quantity:</Text>
                    <Text style = {styles.myProducts}>Unit Price:</Text>
                    <Text style = {styles.myProducts}>Total Price:</Text>
                    <Text style = {styles.myProducts}>Customer Name:</Text>
                    <Text style = {styles.myProducts}>Phone Number:</Text>
                    <Text style = {styles.myProducts}>Shipping Address:</Text>
                    <Text style = {styles.myProducts}>Mode of Payment:</Text>
                    <TouchableOpacity>
                      <Text>Shipping Status</Text>
                    </TouchableOpacity>
                  
                  </TouchableOpacity>
                )}
              />
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
      marginTop: '1%',
      marginLeft: '4%',
      marginRight: '4%',
      alignItems: 'center',
    },
    myProducts:{
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    topBG: {
        width: '100%',
        height: 70,
        backgroundColor: "#388E3C",
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',   
    },
    tab:{
      marginTop: 10,
      flexDirection: "row",
      flexWrap: 'nowrap',
      height: 45,
      width: '50%',
      alignItems: 'center',   
      justifyContent: 'center',
      borderRadius: 10,
    },
    button:{
      width: '100%',
      alignItems: 'center',
    },
    ongoingBG:{
      backgroundColor: '#FFD88F',
      height: '100%',
      width: '90%',
      justifyContent: 'center',
      borderRadius: 15,
    },
    ongoingText:{
      color:'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    deliveredBG:{
      backgroundColor: '#8B9FDC',
      height: '100%',
      width: '90%',
      justifyContent: 'center',
      borderRadius: 15,
    },
    deliveredText:{
      color:'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    itemBox:{
      backgroundColor: "white",
      marginTop: 15,
      width: '100%',
      padding: 10,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 10,
    },
    rowFormat:{
      flexDirection: "row",
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
    rowFormat1:{
      flexDirection: "row",
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      width: '100%',
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
        marginRight: 10,
    },
      itemDate:{
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
      },
      itemName:{
        color: 'black',
        fontSize: 18,
      },
      bottom:{
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5,
  
      },
      deliveredButton:{
        backgroundColor: 'green',
        borderRadius: 5,
        height: 60,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
      },
      deliveredButtonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      leftDetail:{
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
      },
      rightDetail:{
        color: 'black',
        textAlign: 'right',
        fontSize: 14,
      },
      price:{
        textAlign: 'right',
      },
      divider:{
        marginTop: 10,
        backgroundColor: 'gray',
        height:2,
        width:'100%',
      },
})

export default Transaction;