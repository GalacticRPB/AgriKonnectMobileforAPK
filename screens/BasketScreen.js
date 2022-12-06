import React, {useEffect, useState} from 'react';
import {Text,View,StyleSheet,ScrollView,TouchableOpacity, Pressable} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

const shippingfee = 50;
const conviencefee = 5;

const BasketScreen  = ({navigation, route}) => {

  const [data, setData] = useState([]);
  const [value, setQuantity] = useState(1);


  let id = global.id

  /*const handleDecrement = (cart_id) => {
    setData((data) =>
      data.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              fruits_qty: item.fruits_qty - (item.fruits_qty > 1 ? 1 : 0),
            }
          : item
      )
    );
    updateCartQuantity(cart_id, "dec");
  };

  const handleIncrement = (cart_id) => {
    setData((data) =>
      data.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              fruits_qty: item.fruits_qty + (item.fruits_qty < 10 ? 1 : 0),
            }
          : item
      )
    );
    updateCartQuantity(cart_id, "inc");
  };

  function updateCartQuantity  (cart_id, scope) {
    try {
      const response = fetch(`http://10.0.0.2:8000/api/basket-updatedquantity/${cart_id}/${scope}/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      if ((response).status === 200)
      {

      }

    }catch (error){
      console.error(error);
    }

  }*/

  const getBasket = async () => {
    try {
      const response = await fetch (`http://10.0.2.2:8000/api/basket/${id}`);
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
          <Text style={styles.SectionText}> My Basket </Text>
          <ScrollView>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
              <FlatList data = {data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <ScrollView>
                    <TouchableOpacity onPress={() => {navigation.navigate('CheckoutForm', {item:item, sffee: shippingfee, cfee: conviencefee})}}>
                    <View style={styles.ProdInfo}>
                  
                        <Text style={styles.ProdName}>Product Name: {item.name}</Text>
                        <Text style={styles.ProdPrice}>Unit Price: {item.price}</Text>
                        <Text style={styles.ProdPrice}>Quantity: {item.fruits_qty}</Text>
                        <Text style={styles.ProdPrice}>Total Price: {item.fruits_qty * item.price}</Text>
                        <View style={{flexDirection: 'row'}}>
          
                        </View>
                        
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
export default BasketScreen;


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