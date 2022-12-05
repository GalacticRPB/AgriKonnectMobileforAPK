import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
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

const Products = ({navigation}) => {
  let id = global.id;
  const [search, setSearch] = useState('');

  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const searchFilter = (text) => {
    if (text) {
        const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase()
                        : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    }
    else
    {
      setFilteredData(masterData);
      setSearch(text);
    }
  }

const getProducts = () => {
  const apiURL = `http://10.0.2.2:8000/api/getproducts/${id}`;
  fetch(apiURL)
  .then((response) => response.json())
  .then((responseJson) => {
      setFilteredData(responseJson.products);
      setMasterData(responseJson.products);
  }).catch((error) => {
      console.error(error);
  }).finally(() => {
      setLoading(false);
  })
}

  useEffect(() => {
    getProducts();
  }, []);
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.sBarBG}>
        <View style={styles.searchbar}>
        <FontAwesome name='search' color={'gray'} size={30} iconStyle={''}/>
          <TextInput 
            style={styles.searchbar}
            placeholder='Search Product Name'
            placeholderTextColor = 'gray'
            value = {search}
            onChangeText = { (text) => searchFilter(text) }
            ></TextInput>
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
        <ScrollView>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                <FlatList data = {filteredData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <ScrollView>
                    <TouchableOpacity onPress={() => {navigation.navigate('EditProduct', {item:item})}}>
                    <View style={styles.ProdInfo}>
                    <Text style={styles.ProdName}>{item.category}</Text>
                      <Text style={styles.ProdPrice}>{item.name}</Text>
                      <Text style={styles.ProdPrice}>Php {item.price}.00</Text>
                      <Text style={styles.ProdPrice}>Quantity: {item.quantity}</Text>
                    </View>
                    </TouchableOpacity>
                  </ScrollView>

                  )}>
                  
                </FlatList>
                    
              </View>
            </View>
          </ScrollView>

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
    searchbar: {
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      margin: 10,
    },
    myProducts:{
        color: 'green',
        fontSize: 28,
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
    bottom:{
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 5,

    },
    editButton:{
      backgroundColor: 'orange',
      borderRadius: 5,
      height: 40,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    editButtonText:{
      color: 'black',
      fontSize: 18,
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
      marginLeft: 90,
    },
  
  
  })

export default Products;