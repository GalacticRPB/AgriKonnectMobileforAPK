import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';

/*Icons Library-Start*/
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
/*Icons Library-End*/
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

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
  const apiURL = `https://agrikonnect.herokuapp.com/api/getproducts/${id}`;
  fetch(apiURL)
  .then((response) => response.json())
  .then((responseJson) => {
      setFilteredData(responseJson.products);
      setMasterData(responseJson.products);
  }).catch((error) => {
      // console.error(error);
  }).finally(() => {
      setLoading(false);
  })
}

  useEffect(() => {
    getProducts();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts();
    wait(2000).then(() => setRefreshing(false));
  },[]);

    return(
        <ScrollView contentContainerStyle={styles.contentContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

        <View style={styles.sBarBG}>
          <View style={styles.searchbar}>
          <FontAwesome name="search" size={30} color="gray" />
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
            <Entypo name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView>
           
              <View style={{flexDirection: 'row'}}>
                <FlatList data = {filteredData}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <ScrollView>
                    <View style={styles.ProdInfo}>
                      <View style={styles.BestContainer}>
                        <Text style={styles.ProdName}>{item.name}</Text>
                        <Text style={styles.ProdPrice}>Php {item.price}.00</Text>
                        <Text style={styles.ProdPrice}>Quantity: {item.quantity}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style = {styles.editButton} onPress={() => {navigation.navigate('EditProduct', {item:item})}}>
                          <Text style = {styles.editButtonText}>EDIT</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>

                  )}>
                  
                </FlatList>
                    
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
      backgroundColor: '#F5E12A',
      borderRadius: 5,
      height: 40,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
    editButtonText:{
      color: 'black',
      fontSize: 16,
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
      marginBottom: 10,
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
    BestContainer:{
      backgroundColor: 'white',
      flex: 1,
    },
    ProdInfo: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 10,
      shadowColor: "#000",
      padding: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin: 5,
      marginTop: 10,
      flexDirection: "row",
      flexWrap: 'nowrap',
      alignItems:'center',
      flex: 1,
    },
    ProdName: {
      fontWeight: 'bold', 
      color: '#000000',
      fontSize: 22,
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
      marginLeft: 90,
    },
  
  
  })

export default Products;