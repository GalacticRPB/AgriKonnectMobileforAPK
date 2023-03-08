import React, {useEffect, useState} from 'react';
import {Text,View,StyleSheet,ScrollView,TouchableOpacity, Image} from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

const shippingfee = 50;
const modeofpayment = "Cash on Delivery";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const BasketScreen  = ({navigation, route}) => {

  const [data, setData] = useState([]);
  const [value, setQuantity] = useState(1);


  let id = global.id

  const getBasket = async () => {
    try {
      const response = await fetch (`https://agrikonnect.herokuapp.com/api/basket/${id}`);
      const json = await response.json();
      setData(json.cart)
    }
    catch (error)
    {
      console.error(error)
    }
  }


  console.log(data)
  useEffect(() => {
    getBasket();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getBasket();
    wait(2000).then(() => setRefreshing(false));
  },[]);

  return (
    <View style={styles.container}>
       {/* <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}> */}
        <View style={styles.headercontainer}>
          <Text style={styles.SectionText}> My Basket </Text>
          <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
              <View style={{flexDirection: 'row'}}>
              <FlatList data = {data}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    // <ScrollView>
                      <View style={styles.BestContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('CheckoutForm', {item:item, sffee: shippingfee, mopayment: modeofpayment})}}>
                    <View style={styles.ProdInfo}>
                        <Text style={styles.ProdName}>{item.name}</Text>
                        <Text style={styles.ProdPrice}>Unit Price: Php {item.price}.00</Text>
                        <Text style={styles.ProdPrice}>Quantity:  {item.fruits_qty}</Text>
                        <Text style={styles.ProdPrice}>Total Price: Php {item.fruits_qty * item.price}.00</Text>
                        <View style={{flexDirection: 'row'}}>
                        </View>    
                    </View>
                    </TouchableOpacity>
                    </View>
                  // </ScrollView>
                  )}>
                </FlatList> 
              </View>
          </ScrollView>
        </View>
      {/* </ScrollView> */}
    </View>
  )
}
export default BasketScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F4F4',
    paddingTop: 50,
  },
  headercontainer:{
    padding: 20,
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontSize: 20,
    padding: 10,
  },
  BestText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontSize: 20,
    padding: 10,
    marginTop: -30,
  },
  BestContainer:{
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ProdImg:{
    marginTop: 10,
    marginLeft: 10,
    height: 90,
    width: 90,
  },
  ProdInfo: {
    margin: 20,
  },
  ProdName: {
    fontWeight: 'bold', 
    color: '#000000',
    fontSize: 25
  },
  ProdPrice:{
    color: '#026206',
  },
  BestBasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:30,
    marginLeft: 100,
  },
  radiobutton:{
    alignSelf: 'center',
  },
  decrementbutton: {
    backgroundColor:"#F22323",
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 5,
  },
  incrementbutton: {
  backgroundColor:"#388E3C",
  borderRadius: 10,
  padding: 10,
  color: 'white',
  marginBottom: 5
  },
  numberContainer: {
      backgroundColor:"#FFF59D",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      marginBottom: 5,
  },
  TotalContainer:{
    backgroundColor: 'white',
    justifyContent: 'space-between'
  }
})