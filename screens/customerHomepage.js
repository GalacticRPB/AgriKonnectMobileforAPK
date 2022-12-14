import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, ActivityIndicator, Image, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const CustomerHomepage = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
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

const getRecommended = () => {
  const apiURL = `http://10.0.2.2:8000/api/product-recommended`;
  fetch(apiURL)
  .then((response) => response.json())
  .then((responseJson) => {
      setFilteredData(responseJson.data);
      setMasterData(responseJson.data);
  }).catch((error) => {
      console.error(error);
  }).finally(() => {
      setLoading(false);
  })
}


  const showRecommended = () => {
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
                <TouchableOpacity onPress={() => {navigation.navigate('RecommendedProducts', {item:item})}}>
                  <Text style={styles.ProdName}>{item.name}</Text>
                  <Text style={styles.ProdPrice}>Php {item.price}.00</Text>
                  <Text style={styles.ProdPrice}>Seller: {item.seller_name}</Text>
                </TouchableOpacity>
            </View>
          )}
        />
      )
    }
  }

  useEffect(() => {
    getRecommended();
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headercontainer}>
              <View>
                <Text style={styles.title}> Hi, {global.firstname}! </Text>
                <Text style={styles.subtitle}> What would you buy today? </Text>
              </View>
        </View>
        <View style={styles.searchcontainer}>
        <View style={styles.SectionStyle}>
 
        <Feather name="search" size={24} color="black" />
        <TextInput 
            placeholder='Search Product Name'
            placeholderTextColor = 'gray'
            value = {search}
            onChangeText = { (text) => searchFilter(text) }
            style={styles.searchbar}
          >


          </TextInput>
          </View>
        </View>
        <Text style={styles.SectionText}> Categories </Text>
        <View style = {styles.horizontalView}>
          <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>navigation.navigate('Vegetables')}>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                <Image style={styles.CategIcon} source={require('../assets/vegetables.png')}/>
                      <Text style={styles.Categname}>Vegetables</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Fruits')}>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                <Image style={styles.CategIcon} source={require('../assets/fruit.png')}/>
                      <Text style={styles.Categname}>Fruits</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={styles.BestText}> Recommended Products</Text>
        <ScrollView>
              <View >
              
              {showRecommended()}
              </View>

        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default CustomerHomepage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F4F4',
    paddingTop: 50,
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
  searchcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  headercontainer:{
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  searchbar: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    margin: 10,
    flex: 1,
  },
  title: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
  },
  subtitle: {
    color: '#5F5B5B',
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',
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
    marginRight:10,
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
    fontFamily: 'Poppins', 
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
    fontFamily: 'Poppins', 
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
    marginLeft: 120,
  },
  Recoprice: {
    fontSize: 15, 
    fontFamily: 'Poppins', 
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
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 10,
    marginTop: -10,
  },
  BestContainer:{
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
  },
  ProdImg:{
    marginTop: 10,
    marginLeft: 10,
    height: 90,
    width: 90,
  },
  ProdInfo: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  ProdName: {
    fontWeight: 'bold', 
    color: '#000000',
    fontSize: 20,
  },
  ProdPrice:{
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
