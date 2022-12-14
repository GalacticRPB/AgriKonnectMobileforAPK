import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

/*Icons Library-Start*/
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
/*Icons Library-End*/

const Home = ({navigation}) => {

  const [recent, setRecent] = useState([]);
  const [report, setReport] = useState([]);
  const [info, setInfo] = useState([]);
  const [qty, setQuantity] = useState([]);
  const [count, setCount] = useState([]);

  let id = global.id

  console.log(id)
  console.log(recent)
  const ordercount = count;
  const total = report;

  const getReport = async () => {
    try{
      const response = await fetch(`http://10.0.2.2:8000/api/sample/${id}`);
      const json = await response.json();
      setReport(json.price)
      setInfo(json.products)
      setQuantity(json.qty)
    }
    catch (error)
    {
      console.error(error)
    }
   
  }

  const getCount = async () => {
    try{
      const response = await fetch(`http://10.0.2.2:8000/api/orderCount/${id}`);
      const json = await response.json();
      setCount(json.orderCount)
    }
    catch (error)
    {
      console.error(error)
    }
   
  }
  const getRecent = async () => {
    try {
      const response = await fetch (`http://10.0.2.2:8000/api/recent/${id}`);
      const json = await response.json();
      setRecent(json.sellerdelivered)
    }
    catch (error)
    {
      console.error(error)
    }
  }

  useEffect(() => {
    getRecent();
    getReport();
    getCount();
  }, []);

  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
      <View style = {[styles.top]}>
      <View>
        <Text style = {styles.hello}>Hello,</Text>
        <Text style = {styles.name}>{global.firstname}</Text>
      </View>
      <View>
        <MaterialIcons name="account-circle" size={80} color="gray" />
      </View>
      </View>

      <View>
      <Text style = {styles.recent}>Transaction Details</Text>
      <Text style={styles.ProdPrice}>Total Order Purchase for this Month: {ordercount}</Text>
      <Text style={styles.ProdPrice}>Sales: Php {total}.00</Text>
      </View>

      <Text style = {styles.recent}>Recently Sold</Text> 
        <View>
          <ScrollView style = {styles.BestBasketButton}>
            <FlatList data = {recent}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                  <View style={styles.ProdInfo}>
                  <Text style={styles.ProdName}>{item.name}</Text>
                    <Text style={styles.ProdPrice}>Product: {item.order_name}</Text>
                    <Text style={styles.ProdPrice}>Php : Php {item.order_total}.00</Text>
                  </View>

              )}>
              
            </FlatList>
          </ScrollView>
          <View style={styles.bottom}>
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
    paddingTop: 40,
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  top:{
    marginTop: 15,
    flexDirection: "row",
    flexWrap: 'nowrap',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name:{
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
   
  },
  recent:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  rSoldBox:{
    marginTop: 5,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: 'nowrap',
    borderRadius: 8,
    height: 80,
    padding: 5,
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
  bottom:{
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  rectangle: {
    width: 'auto',
    height: 250,
    borderRadius: 10,
    backgroundColor: "#388E3C",
    marginTop: 0,
  },
  hello:{
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  ProdInfo: {
    padding: 10,
    marginTop: -20,
  },
  ProdName: {
    fontWeight: 'bold', 
    color: '#000000',
    fontSize: 15
  },
  ProdPrice:{
    fontWeight: 'bold', 
    color: '#000000',
  },
  BestBasketButton:{
    backgroundColor:"white",
    borderRadius: 10,
    width: '100%',
    marginTop:10,
  },


})

export default Home;