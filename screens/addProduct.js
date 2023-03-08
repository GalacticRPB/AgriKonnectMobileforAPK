import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const category = ['Vegetables', 'Fruits'];
const desc = ['Organic', 'Conventional'];
const name = [
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

async function base64File(url) {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
}

export default function AddProduct({navigation}) {
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [productInfo, setProductInfo] = React.useState({
    image: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
  });

  const [nameError, setNameerror] = React.useState('');
  const [categoryError, setCategoryError] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [priceError, setPriceError] = React.useState('');
  const [quantityError, setQuantityError] = React.useState('');

  const launchImageLibraryHandler = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    }).then(selectedImg => {
      setSelectedImage(selectedImg.assets);
      setProductInfo({...productInfo, image: selectedImg.assets[0].uri});
      // base64File(selectedImg.assets[0].uri).then(res => {
      //   setProductInfo({...productInfo, image: res});
      // });
    });
  };

  const handleAddProduct = () => {
    const formData = new FormData();
    formData.append('image', {
      uri: productInfo.image,
      type: 'image/jpeg',
      name: productInfo.image.substring(
        productInfo.image.lastIndexOf('/') + 1,
        productInfo.image.length,
      ),
    });
    formData.append('name', productInfo.name);
    formData.append('price', productInfo.price);
    formData.append('quantity', productInfo.quantity);
    formData.append('category', productInfo.category);
    formData.append('description', productInfo.description);
    formData.append('user_id', global.id);
    formData.append(
      'seller_name',
      `${global.firstname} ${global.middlename} ${global.lastname}`,
    );

    fetch('https://agrikonnect.herokuapp.com/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          global.name,
          global.category,
          global.description,
          global.price,
          global.quantity,
          Alert.alert('Success', 'Product Added Successfully!');
          navigation.navigate('Products');
        } 
        else if(data.status === 422)
        {
          // Alert.alert('Error', 'All fields are required');
         
          if(data)
          {
            const {name, category, description, quantity, price} = data.errors;
            if(name)
            {
              setNameerror(name[0]);
            }
            if(category)
            {
              setCategoryError(category[0]);
            }
            if(description)
            {
              setDescriptionError(description[0]);
            }
            if(quantity)
            {
              setQuantityError(quantity[0]);
            }
            if(price)
            {
              setPriceError(price[0]);
            }
          }
          else
          {
            console.error(data);
          }
          // setErrorMessage(data.error)
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Please provide image of your product!')
        // console.error(error);
      });
  };



  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.ground}>
        <View style={styles.foreground}>
          <View style={[styles.mPBox]}>
            <TouchableOpacity>
              <Text style={styles.leftIcon}>
                <AntDesign name="arrowleft" size={25} color="black"
                onPress={() => navigation.navigate('Products')} />
              </Text>
            </TouchableOpacity>
            <Text style={styles.edit}>Add New Product</Text>
          </View>
          <Text style={styles.addtext}>Add product image</Text>
          <Text style={styles.text}>Upload an image of your product</Text>
          {selectedImage.length > 0 ? (
            <Image
              style={{width: 150, height: 150}}
              source={{uri: selectedImage[0]?.uri}}
            />
          ) : (
            <TouchableOpacity
              style={styles.circle}
              onPress={launchImageLibraryHandler}>
              <View style={styles.addButton}>
              <Entypo name="plus" size={30} color="white" />
              </View>
            </TouchableOpacity>
          )}
          
          <Text style={styles.addtext}>Add product details</Text>
          <Text style={styles.text}>Select product category</Text>
          <SelectDropdown
            defaultButtonText={' '}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            data={category}
            onSelect={selectedItem => {
              setProductInfo({...productInfo, category: selectedItem});
            }}
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
          {categoryError ? <Text style = {{color: 'red'}}>{categoryError}</Text> : null}
          <Text style={styles.text}>Product Name</Text>
          <SelectDropdown
            defaultButtonText={' '}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            data={name}
            onSelect={selectedItem => {
              setProductInfo({...productInfo, name: selectedItem});
            }}
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
          {nameError ? <Text style = {{color: 'red'}}>{nameError}</Text> : null}
          <Text style={styles.text}>Description</Text>
          <SelectDropdown
            defaultButtonText={' '}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            data={desc}
            onSelect={selectedItem => {
              setProductInfo({...productInfo, description: selectedItem});
            }}
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
          {descriptionError ? <Text style = {{color: 'red'}}>{descriptionError}</Text> : null}
          <Text style={styles.text}>Product Price</Text>
          <TextInput
            placeholder="Price in Peso (ex. 20.00)"
            style={styles.input}
            keyboardType="numeric"
            onChange={e =>
              setProductInfo({...productInfo, price: e.nativeEvent.text})
            }></TextInput>
          {priceError ? <Text style = {{color: 'red'}}>{priceError}</Text> : null}
          <Text style={styles.text}>Product Quantity</Text>
          <TextInput
            placeholder="Quantity in Kilograms"
            style={styles.input}
            keyboardType="numeric"
            onChange={e =>
              setProductInfo({...productInfo, quantity: e.nativeEvent.text})
            }></TextInput>
          {quantityError ? <Text style = {{color: 'red'}}>{quantityError}</Text> : null}
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
              <Text style={styles.buttonText}>ADD PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    color: '#F4F4F4',
    paddingTop: 50,
  },
  ground: {
    backgroundColor: '#F4F4F4',
  },
  foreground: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  mPBox: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftIcon: {
    justifyContent: 'flex-start',
    marginLeft: '5%',
  },
  edit: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 15,
  },
  addtext: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#388E3C',
    marginTop: 10,
  },
  addButton: {
    height: '100%',
    width: '100%',
    alignSelf: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  inputsBox: {
    marginBottom: 0,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 15,
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
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
    fontWeight: 'bold',
  },
  dropdown1DropdownStyle: {
    backgroundColor: 'white',
  },
  dropdown1RowStyle: {
    backgroundColor: '#F4F4F4',
    borderBottomColor: 'green',
  },
  dropdown1RowTxtStyle: {
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
