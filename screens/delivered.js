import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
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

const Delivered = ({navigation}) => {

  const [delivered, setDelivered] = useState([]);
  
  let user_id = global.id

  const toDelivered = async () => {
    try
    {
      const response = await fetch(`http://10.0.2.2:8000/api/order-delivered/${user_id}`);
      const json = await response.json();
      setDelivered(json.delivered)
    }
    catch (error)
    {
      console.error(error)
    }
  }

  console.log(delivered)
  useEffect(() => {
    toDelivered();
  }, []);
    return(
    <ScrollView contentContainerStyle={styles.contentContainer}>

<View style = {[styles.mPBox, styles.topBG]}>
        <TouchableOpacity>
        <Text style = {styles.leftIcon}>
            <FontAwesome5 name="arrow-left" color={'white'} size={25} iconStyle={''} onPress={()=> navigation.navigate('Transaction')}/>
        </Text>
        </TouchableOpacity>
        <Text style = {styles.name}>Delivered Transactions</Text>
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

      <FlatList data = {delivered}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
        <ScrollView>
            <View style={{flexDirection: 'column', margin: 10}}>
                <Text style={styles.ButtonTitle}>Product Name: {item.order_name}</Text>
                <Text style={styles.amount}>Quantity: {item.order_qty}</Text>
                <Text style={styles.amount}>Price: Php {item.order_total}.00</Text>
                <Text style={styles.amount}>Order Status: Delivered</Text>
            </View>
        </ScrollView>

        )}>
    </FlatList>

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
        backgroundColor: "blue",
        justifyContent: 'flex-start',
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
      backgroundColor: 'blue',
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
      leftDetail:{
        color: 'blue',
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
      mPBox:{
        flexDirection: "row",
        flexWrap: 'nowrap',
    },
    leftIcon:{
        marginLeft: '20%',
    },
})

export default Delivered;