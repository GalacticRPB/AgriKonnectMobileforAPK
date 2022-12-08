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

const countries = ['Vegetable', 'Fruit'];

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

    fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          navigation.navigate('Products');
        } else {
          Alert.alert('Error', 'Could not add product');
          console.error(data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.ground}>
        <View style={styles.foreground}>
          <View style={[styles.mPBox]}>
            <TouchableOpacity>
              <Text style={styles.leftIcon}>
                <FontAwesome5
                  name="arrow-left"
                  color={'black'}
                  size={25}
                  iconStyle={''}
                  onPress={() => navigation.navigate('Products')}
                />
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
                <FontAwesome5 name="plus" color={'white'} size={30} />
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
            data={countries}
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
          <Text style={styles.text}>Product Name</Text>
          <TextInput
            style={styles.input}
            onChange={e =>
              setProductInfo({...productInfo, name: e.nativeEvent.text})
            }></TextInput>

          <Text style={styles.text}>Description</Text>
          <TextInput
            style={styles.input}
            onChange={e =>
              setProductInfo({
                ...productInfo,
                description: e.nativeEvent.text,
              })
            }></TextInput>

          <Text style={styles.text}>Product Price</Text>
          <TextInput
            placeholder="Price in Peso (ex. 20.00)"
            style={styles.input}
            keyboardType="numeric"
            onChange={e =>
              setProductInfo({...productInfo, price: e.nativeEvent.text})
            }></TextInput>

          <Text style={styles.text}>Product Quantity</Text>
          <TextInput
            placeholder="Quantity in Kilograms"
            style={styles.input}
            keyboardType="numeric"
            onChange={e =>
              setProductInfo({...productInfo, quantity: e.nativeEvent.text})
            }></TextInput>

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
