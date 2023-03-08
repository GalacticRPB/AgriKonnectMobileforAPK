import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, SectionList, Image, ScrollView, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const Fruits = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [term, setItem] = useState ([]);

    /*const getVegetable = async () => {
      try {
        const response = await fetch ( `http://10.0.2.2:8000/api/vegetable`);
        const json = await response.json();
        setItem(json.products);
      }
      catch (error)
      {
        console.error(error);
      }
      finally
      {
        setLoading(false);
      }
    }*/

    
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
  const apiURL = `https://agrikonnect.herokuapp.com/api/fruit`;
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


  const showFruits = () => {
    while(isLoading){
      return(<ActivityIndicator size="large" color="green" style={{ alignSelf: 'center' }}></ActivityIndicator>)
    }
    if (filteredData.length == 0) {
      return (
        <Text style = {{ fontSize: 20, color: 'gray', justifyContent: 'center', textAlign: 'center', marginTop: 25, marginBottom: 25 }}> No Product Available</Text>
      )
    }
    else
    {
      return(
        <FlatList
          data = {filteredData}
          keyExtractor= {({id}, index) => id}
          renderItem={({item}) => (
            <View style={styles.PContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate('ProductDetails', {item:item})}}>
                  <Text style={styles.ProdName}>{item.name}</Text>
                  <Text style={styles.ProdPrice}>Php {item.price}.00</Text>
                  <Text style={styles.ProdSeller}>Seller: {item.seller_name}</Text>
                </TouchableOpacity>
            </View>
          )}
        />
      )
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row', padding: 10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigation')}>
            <Ionicons name="arrow-back-sharp" size={50} color="#5F5B5B" />
            </TouchableOpacity>
                    
        <Text style={styles.SectionText}> Fruits</Text>
        </View>
        <View>
        <TextInput 
            placeholder='Search Product Name'
            placeholderTextColor = 'gray'
            value = {search}
            onChangeText = { (text) => searchFilter(text) }
            style={styles.searchbar}
            ></TextInput>
        </View>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                {showFruits()}
                
                 
              </View>
            </View>
    </View>
    );
}

export default Fruits;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 50,
  },

  title: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#5F5B5B',
    fontSize: 15
  },
  BasketIcon:{
    alignSelf: 'center'
  },
  BasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontSize: 20,
    padding: 10,
  },
  horizontalView: {
    height: 130, 
    margin: 10,
  },
  buttonCategories:{
    backgroundColor: '#31A05F',
    height: 130,
    width: 130,
    borderRadius: 20,
    margin: 1,
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  CategIcon:{
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  Categname: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FFFFFF',
    textAlign: 'center'
  },
  horizontalReco: {
    height: 300,
    margin: 1,
  },
  RecoContainer:{
    height: 150,
    width: 170,
    margin: 5,
  },
  productContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  RecoImg:{
    height: 90,
    width: 90,
    alignSelf: 'center'
  },
  Reconame: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FFFFFF',
    margin: 10,
    textAlign: 'left'
  },
  AddtoBasket:{
    alignSelf: 'center'
  },
  AddtoBasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:10,
    marginLeft: 110,
  },
  Recoprice: {
    fontSize: 15, 
    color: '#FFFFFF',
    margin: 10,
    textAlign: 'left'
  },
  InfoContainer: {
    backgroundColor: "#31A05F",
    height: 110, 
    borderRadius: 20,
  },
  BestText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontSize: 20,
    padding: 10,
    marginTop: -30,
  },
  BestContainer:{
    flex: 1,
    margin: 10,
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
    fontSize: 20
  },
  ProdSeller:{
    color: 'gray',
  },
  ProdPrice:{
    color: '#026206',
    fontWeight: 'bold', 
  },
  BestBasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:30,
    marginLeft: 90,
  },
  searchbar:{
    width: '95%',
    height: 50,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    alignSelf: 'center',
  },
  PContainer:{
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    padding: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
})