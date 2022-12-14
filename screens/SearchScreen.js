import React, { useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Incons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import ProductContainer from './ProductContainer';

const SearchScreen = ({navigation}) => {

    const [data, setData] = useState ('');
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
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headercontainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Incons name='arrow-back-sharp' size={25}/>
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar
            placeholder='Search a product'
            onChange = {filteredData}>
              
            </SearchBar>
          </View>
          <ProductContainer/>
        </ScrollView>
    </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
    },
    headercontainer:{
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between'
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
    BestText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
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
    resultText:{
        margin: 10, 
        fontWeight: 'bold',
        color: '#000000',
    }
})