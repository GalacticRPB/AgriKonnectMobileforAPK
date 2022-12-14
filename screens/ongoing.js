import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';

/*Icons Library-Start*/
import { AntDesign } from '@expo/vector-icons'; 
/*Icons Library-End*/
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Ongoing = ({navigation}) => {

    const [ongoing, setOngoing] = useState([])

    let user_id = global.id
    
    const getOngoing = async () => {
      try{
        const response = await fetch(`http://10.0.2.2:8000/api/ongoing/${user_id}`);
        const json = await response.json();
        setOngoing(json.deliveries)
      }
      catch (error)
      {
        console.error(error)
      }
    }
    useEffect(() => {
      getOngoing();
    },[]);

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getOngoing();
    wait(2000).then(() => setRefreshing(false));
  },[]);

    return(
    <ScrollView contentContainerStyle={styles.contentContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

<View style = {[styles.mPBox, styles.topBG]}>
        <TouchableOpacity>
        <Text style = {styles.leftIcon}>
            <AntDesign name="arrowleft" size={25} color="white" onPress={()=> navigation.navigate('Transaction')} />
        </Text>
        </TouchableOpacity>
        <Text style = {styles.name}>Ongoing Transactions</Text>
    </View>
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
      <FlatList data= {ongoing}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
        <ScrollView>
             <View style={{flexDirection: 'column', margin: 10}}>
              <View style={styles.ProdInfo}>
                    <View style={styles.BestContainer}>
                  <Text style={styles.ButtonTitle}>Product Name: {item.order_name}</Text>
                  <Text style={styles.amount}>Quantity: {item.order_qty}</Text>
                  <Text style={styles.amount}>Unit Price: {item.order_price}</Text>
                  <Text style={styles.amount}>Total Price: {item.order_total}</Text>
                  <Text style={styles.amount}>Customer Name: {item.firstname} {item.middlename} {item.lastname}</Text>
                  <Text style={styles.amount}>Mobile Phone: {item.contactNo}</Text>
                  <Text style={styles.amount}>Shipping Address: {item.shippingaddress}</Text>
                  <Text style={styles.amount}>Mode of Payment: {item.modeofpayment}</Text>
                  <Text style={styles.amount}>Shipping Status: Pending...</Text>
              </View>
              </View>
              </View>

        </ScrollView>
      )}>

      </FlatList>
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
    ProdInfo: {
      margin: 20,
      marginTop: 10,
    },
    topBG: {
        width: '100%',
        height: 70,
        backgroundColor: "orange",
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
      backgroundColor: 'orange',
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
      leftDetail:{
        color: 'orange',
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

export default Ongoing;