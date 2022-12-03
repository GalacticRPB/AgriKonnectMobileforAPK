import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, SectionList, Image, ScrollView, ActivityIndicator} from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';


const Vegetables = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [term, setItem] = useState ([]);

    const getVegetable = async () => {
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
    }

    const showVegetables = () => {
      while(isLoading){
        return(<ActivityIndicator size="large" color="green" style={{ alignSelf: 'center' }}></ActivityIndicator>)
      }
      if (term.length == 0) {
        return (
          <Text style = {{ fontSize: 20, color: 'gray', justifyContent: 'center', textAlign: 'center', marginTop: 25, marginBottom: 25 }}> No Product Available</Text>
        )
      }
      else
      {
        return(
          <FlatList
            data = {term}
            keyExtractor= {({id}, index) => id}
            renderItem={({item}) => (
              <View style={{ marginTop: 20 }}>
                  <TouchableOpacity onPress={() => {navigation.navigate('VegetableDetails', {item:item})}}>
                    <Text style={styles.ProdName}>{item.name}</Text>
                    <Text style={styles.ProdPrice}>Php {item.price}.oo</Text>
                    <Text style={styles.ProdPrice}>Seller: {item.seller_name}</Text>
                  </TouchableOpacity>
              </View>
            )}
          />
        )
      }
    }

  useEffect(() => {
    getVegetable();
  }, []);

  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigation')}>
                    <IoIcons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    
        <Text style={styles.SectionText}> Vegetables</Text>
        </View>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                {showVegetables()}
                
                 
              </View>
            </View>
    </View>
    );
}

export default Vegetables;

const styles = StyleSheet.create({
  container: {
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
    marginLeft: 110,
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
    marginLeft: 90,
  },
})