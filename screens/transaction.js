import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons'; 

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Transaction = ({navigation}) => {
  let user_id = global.id;

  const [transaction, setTransaction] = useState([]);
  const [orderDeliver, setOrderDeliver] = useState([]);

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
  useEffect(() => {
    getTransaction();
  }, []);

  const orderDelivered = async () => {
    try{
      const response = await fetch(`http://10.0.2.2:8000/api/out-for-delivery`, {
        method: 'POST',
        headers: {
          Accept: 'applicaton/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: transaction[0].product_id,
          seller_id: transaction[0].seller_id,
          customer_id: transaction[0].user_id,
          order_id: transaction[0].id,
          order_name: transaction[0].order_name,
          order_qty: transaction[0].product_qty,
          order_price: transaction[0].price,
          order_total: transaction[0].total_price,
          firstname: transaction[0].firstname,
          middlename: transaction[0].middlename,
          lastname: transaction[0].lastname,
          mobilephone: transaction[0].mobilephone,
          shippingaddress: transaction[0].shippingaddress,
          modeofpayment: transaction[0].modeofpayment,
        })
      });
      Alert.alert('Order out for Delivery');
      const json = await response.json();
      console.log(json)
      setOrderDeliver(json.deliver);
    }catch (error)
    {
      console.error(error);
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getTransaction();
    wait(2000).then(() => setRefreshing(false));
  },[]);
    return(
    <ScrollView contentContainerStyle={styles.contentContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

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
                    <View style={styles.BestContainer}>
                    <View style={{borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth, margin: 3}}/>
                    <Text style = {styles.myProducts}>Product Name: {item.order_name}</Text>
                    <Text style = {styles.myProducts}>Quantity: {item.product_qty}</Text>
                    <Text style = {styles.myProducts}>Unit Price: {item.price}</Text>
                    <Text style = {styles.myProducts}>Total Price: {item.total_price}</Text>
                    <Text style = {styles.myProducts}>Customer Name: {item.firstname} {item.middlename} {item.lastname}</Text>
                    <Text style = {styles.myProducts}>Phone Number: {item.mobilephone}</Text>
                    <Text style = {styles.myProducts}>Shipping Address: {item.shippingaddress}</Text>
                    <Text style = {styles.myProducts}>Mode of Payment: {item.modeofpayment}</Text>
                    <TouchableOpacity style = {styles.registerButton} onPress={ orderDelivered }>
                      <Text >Out for Delivery</Text>
                      
                    </TouchableOpacity>
                    </View>
                   
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
    leftIcon:{
    justifyContent:'flex-start',
    marginLeft: '5%',
},
    name:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',   
    },
    BestContainer:{
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 10,
      shadowColor: "#000",
      padding: 5,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      width: 400,
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
      registerButton:{
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
      },
})

export default Transaction;