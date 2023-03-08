import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

/*Icons Library-Start*/
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/*Icons Library-End*/

const cate = ['Vegetables', 'Fruits'];
const desc = ['Organic', 'Conventional'];
const names = [
  'Talong',
 'Sitaw',
 'Sigarilyas',
  'Patola',
  'Upo',
  'Kalabasa',
  'Kamatis',
  'Labanos',
  'Mustasa',
 'Pechay',
  'Luya',
  'Ampalaya',
 'Okra',
  'Kangkong',
 'Sayote',
  'Malunggay',
  'Balinghoy',
  'Gabi',
  'Saluyot',
  'Siling haba',
  'Siling Labuyo',
 'Calamansi',
  'Monggo',
  'Kamote',
  'Puso ng Saging',
 'Alugbati',
  'Baguio Beans',
 'Patatas',
  'Carrots',
 'Sibuyas Tagalog',
  'Repolyo',
  'Bataw',
  'Tanglad',
  'Patani',
  'Saging',
  'Pinya',
  'Star Apple',
  'Guyabano',
  'Atis',
  'Rambutan',
  'Papaya',
  'Niyog',
  'Buko',
  'Mais',
  'Balimbing',
  'Dragon Fruit',
  'Singkamas',
  'Indian Manggo',
  'Carabao Manggo',
  'Rimas',
  'Pakwan',
  'Dalandan',
  'Sampalok',
  'Lanzones',
  'Santol',
  'Lukban',
  'Aratilis',
  'Kalamansi',
  'Kaong',
  'Caimito',
  'Durian',
  'Kamias',
  'Chico',
  'Langka',
  'Bayabas',
  'Duhat',
  'Dalanghita',
  'Mangosteen',
  'Bignay',
  'Makopa',

];

const EditProduct = ({navigation, route}) => {
  
  const [edit, setEditProduct] = useState([]);

  const [category, setCategory] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);

  //validation

  const [priceError, setPriceError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  var user_id = edit.user_id;
  var product_id = route.params.item.id;
  const getProductDetails = async () => {
    try 
    {
      const response = await fetch(`https://agrikonnect.herokuapp.com/api/edit-products/${product_id}`);
      const json = await response.json();
      setEditProduct(json.product)
      // console.log(json.product)
     
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
      const response = await fetch(`https://agrikonnect.herokuapp.com/api/update-product/${product_id}`, {
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
      
      const data = await response.json();
      if(data.status === 200)
      {
        
        setCategory('');
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        console.log(category, name, description, price, quantity)
        Alert.alert("Product Edit Successfully");
        navigation.navigate('Products');
      }
      else
      {
        if(data)
        {
          const {price, quantity} = data.errors;
          if(price)
          {
            setPriceError(price[0]);
          }
          if(quantity)
          {
            setQuantityError(quantity[0]);
          }
        }
        else
        {
          console.log(data)
        }
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
        <AntDesign name="arrowleft" size={25} color="black"
                onPress={() => navigation.navigate('Products')} />
        </Text>
        </TouchableOpacity>
        <Text style = {styles.edit}>Edit product details</Text> 
    </View>
          
      
      <Text style = {styles.text}>Select product name</Text>
      <SelectDropdown
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      data={names}
      defaultValue={edit.name}
      onSelect={(value) => setName(value)}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
        <Text style = {styles.text}>Select product category</Text>
      <SelectDropdown
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      data={cate}
      defaultValue={edit.category}
      onSelect={(value) => setCategory(value)}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />

      <Text style = {styles.text}>Product Price</Text>
      <TextInput 
      placeholder='Product Price'
      onChangeText = { (text) => setPrice(text) }
      style = {styles.input}
      defaultValue={edit.price}>
      </TextInput>
      {priceError ? <Text style = {{color: 'red'}}>{priceError}</Text> : null}
      <Text style = {styles.text}>Product Quantity</Text>
      <TextInput 
      placeholder='Product Quantity'
      onChangeText = { (text) => setQuantity(text) }
      style = {styles.input}
      defaultValue = {edit.quantity}>
      </TextInput>
      {quantityError ? <Text style = {{color: 'red'}}>{quantityError}</Text> : null}
      <Text style = {styles.text}>Product Description</Text>
      <SelectDropdown
      defaultButtonText={' '}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      data={desc}
      // value={description}
      defaultValue={edit.description}
      onSelect={(value) => setDescription(value)}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />

      <View style={styles.bottom}>
      <TouchableOpacity 
          style = {styles.button}
          onPress={ updateProduct }>
          <Text style = {styles.buttonText}>
            Edit Product</Text>
      </TouchableOpacity>
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  mPBox:{
    flexDirection: "row",
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
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
    marginTop: 0,
   
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