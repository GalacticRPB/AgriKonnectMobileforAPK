import React, { useEffect, useState } from 'react';
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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
/*Icons Library-End*/

const Home = ({navigation}) => {

  const [recent, setRecent] = useState("");

  let id = global.id

  console.log(recent)
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
        <MCI name='account-circle' color={'gray'} size={80} iconStyle={''}/>
      </View>
      </View>

      <View style={[styles.rectangle, styles.elevation]} />

      <Text style = {styles.recent}>Recently Sold</Text> 
        <View>
          <ScrollView>
            <FlatList data = {recent}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <ScrollView>
                  <View style={styles.ProdInfo}>
                  <Text style={styles.ProdName}>{item.name}</Text>
                    <Text style={styles.ProdPrice}>Product: {item.order_name}</Text>
                    <Text style={styles.ProdPrice}>Php : Php {item.order_total}.00</Text>
                  </View>
              </ScrollView>

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
    marginTop: 20,
  },
  hello:{
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  ProdInfo: {
    margin: 20,
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
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:30,
    marginLeft: 100,
  },


})

export default Home;