import React,{useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import MiIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';


const CheckoutForm = ({navigation}) => {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState("");
    
    /*const Checkout = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/place-order', {
                method: 'POST',
                headers: {
                    Accept: 'applicaton/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart_id:
                    seller_id:
                    order_name: 
                    price:
                    product_qty:
                    shippngfee:
                    total_price:
                    firstname:
                    middlename:
                    lastname:
                    shippingaddress:
                    mobilephone: 
                    modeofpaymentL
                    customerId:
                })
            })
        }
    }*/
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> Checkout Form </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.itemPhoto} source={require('../assets/lettuce.png')}/>
                    <View style={{flexDirection: 'column', margin: 10}}>
                        <Text style={styles.prodname}>Lettuce</Text>
                        <Text style={styles.prodprice}>Php. 40.00</Text>
                        <Text style={styles.prodqty}>Qty: 1kg</Text>
                    </View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.TitleInput}> Shipping Address</Text>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('ShippingAddress')}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.Address}> Brgy. Ipilan, Tayabas City</Text>
                                <MiIcons style={styles.forwardIcon} name='arrow-forward-ios'size={20} color='#5F5B5B'/>
                            </View>
                    </TouchableOpacity>
                    <Text style={styles.TitleInput}> Select Payment Method</Text>
                    <SelectDropdown
                    defaultButtonText={'Select payment method'}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                        data={paymentmethod}
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                        }}
                    />
                    <Text style={styles.TitleInput}> Voucher Code </Text>
                        <TextInput 
                        placeholder='Voucher code'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    <Text style={styles.TitleInput}> SubTotal</Text>
                        <TextInput 
                        placeholder='SubTotal'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    <Text style={styles.TitleInput}> Order Amount (fees included)</Text>
                        <TextInput 
                        placeholder='Order Amount'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity>
                            <Text style={styles.basketbutton}>PLACE ORDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CheckoutForm;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        padding: 10,
    },
    itemPhoto:{
        width: 100,
        height: 100,
        margin: 10
    },
    prodname: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
    },
    prodprice:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    prodqty:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    ButtonContainer:{
        padding: 25,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    Address:{
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
    },
    forwardIcon:{ 
        alignSelf: 'center'
    },
    TitleInput:{
        color: '#5F5B5B',
        margin: 10,
    },
    input:{
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        fontSize: 18,
        padding: 12,
        margin: 10
    },
    dropdown1BtnStyle: {
        width: '95%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        margin: 10
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontWeight: 'bold'},
    dropdown1DropdownStyle: {backgroundColor: 'white'},
    dropdown1RowStyle: {backgroundColor: 'green', borderBottomColor: 'green'},
    dropdown1RowTxtStyle: {color: 'white', textAlign: 'left'},
    basketbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    buybutton:{
        backgroundColor: '#F22323',
        borderRadius: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    }
})