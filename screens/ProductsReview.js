import React, {useEffect, useState} from 'react';
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';


const ProductReview  = ({navigation}) => {

  const [data, setData] = useState("");
 
  let user_id = global.id

  const getReview = async () => {
    try {
      const response = await fetch (`http://10.0.2.2:8000/api/review/${user_id}`);
      const json = await response.json();
      setData(json.review)
    }
    catch (error)
    {
      console.error(error)
    }
  }


  console.log(data)
  useEffect(() => {
    getReview();
  }, []);

  /*function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }*/
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headercontainer}>
          <Text style={styles.SectionText}> Product Review </Text>
          <ScrollView>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                <FlatList data = {data}
                  keyExtractor={({id}, index) => id}
                  renderItem={({item}) => (
                    <ScrollView>
                    <TouchableOpacity onPress={() => {navigation.navigate('ProductDetails', {item:item})}}>
                    <View style={styles.ProdInfo}>
                    <Text style={styles.ProdName}>{item.name}</Text>
                      <Text style={styles.ProdPrice}>Product: {item.order_name}</Text>
                      <Text style={styles.ProdPrice}>Review: {item.review}</Text>
                    </View>
                    </TouchableOpacity>
                  </ScrollView>

                  )}>
                  
                </FlatList>
                    
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      </View>
  )
}
export default ProductReview;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F4F4'
  },
  headercontainer:{
    padding: 20,
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 10,
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