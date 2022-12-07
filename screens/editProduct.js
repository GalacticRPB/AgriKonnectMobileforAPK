import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, ViewComponent} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

/*Icons Library-Start*/
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/*Icons Library-End*/

const EditProduct = ({navigation, route}) => {
  
  const [edit, setEditProduct] = useState([]);

  const [category, setCategory] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);

  var user_id = edit.user_id;
  var product_id = route.params.item.id;
  const getProductDetails = async () => {
    try 
    {
      const response = await fetch(`http://10.0.2.2:8000/api/edit-products/${product_id}`);
      const json = await response.json();
      setEditProduct(json.product)
    }
    catch (error)
    {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  const updateProduct = async () => {
    try{
      const response = await fetch(`http://10.0.2.2:8000/api/update-product/${product_id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          category: category,
          name: name,
          description: description,
          price: price,
          quantity: quantity,
        })
      });
      if((response).status === 200)
      {
        
        setCategory('');
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        console.log(category, name, description, price, quantity)
        const json = await response.json();
      }
    }catch (error) {
      console.error(error)
    }
  }
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
    <View style = {[styles.mPBox]}>
        <TouchableOpacity>
        <Text style = {styles.leftIcon}>
            <FontAwesome5 name="arrow-left" color={'black'} size={25} iconStyle={''} onPress={()=> navigation.navigate('Products')}/>
        </Text>
        </TouchableOpacity>
    </View>
          
    </View>
      <Text style = {styles.addtext}>Edit product details</Text> 
      <Text style = {styles.text}>Select product category</Text>
      <TextInput 
      placeholder='Product Category'
      onChangeText = { (text) => [setCategory(text)] }
      style = {styles.input}
      defaultValue = {edit.category}>
      </TextInput>
        <Text style = {styles.text}>Product Name</Text>
       <TextInput 
      placeholder='Product Name'
      onChangeText = { (text) => setName(text) }
      style = {styles.input}
      defaultValue = {edit.name}>
      </TextInput>

      <Text style = {styles.text}>Product Price</Text>
      <TextInput 
      placeholder='Product Price'
      onChangeText = { (text) => setPrice(text) }
      style = {styles.input}
      defaultValue = {edit.price}>
      </TextInput>

      <Text style = {styles.text}>Product Quantity</Text>
      <TextInput 
      placeholder='Product Quantity'
      onChangeText = { (text) => setQuantity(text) }
      style = {styles.input}
      defaultValue = {edit.quantity}>
      </TextInput>

      <Text style = {styles.text}>Product Description</Text>
      <TextInput 
      placeholder='Product Description'
      onChangeText = { (text) => setDescription(text) }
      style = {styles.input}
      defaultValue = {edit.description}>
      </TextInput>

      <View style={styles.bottom}>
      <TouchableOpacity 
          style = {styles.button}
          onPress={ updateProduct }>
          <Text style = {styles.buttonText}>
            Save Product</Text>
      </TouchableOpacity>
      </View>
    <View>

      
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
  mPBox:{
    flexDirection: "row",
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftIcon:{
      justifyContent:'flex-start',
      marginLeft: '5%',
  },
  edit:{
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
   
  },
  addtext:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#388E3C",
    marginTop: 10,
  },
  addButton:{
    height: '100%',
    width: '100%',
    alignSelf: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  inputsBox:{
    marginBottom: 0,
  },
  input:{
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 15,
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  bottom:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    marginBottom: 15,
  },
  dropdown1BtnTxtStyle: {
    color: '#444', 
    textAlign: 'left', 
    fontWeight: 'bold'
  },
  dropdown1DropdownStyle: {
    backgroundColor: 'white'
  },
  dropdown1RowStyle: {
    backgroundColor: '#F4F4F4', 
    borderBottomColor: 'green'
  },
  dropdown1RowTxtStyle: {
    color: 'black', 
    textAlign: 'left',
    fontWeight: 'bold',
  },

})

export default EditProduct;