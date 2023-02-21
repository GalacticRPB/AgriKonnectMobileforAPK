import React,{useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CheckoutForm = ({navigation, route}) => {


    const [shippingaddress, setAddress] = useState([]);
    const [orders, setOrders] = useState([]);

    console.log(global.firstname)
    const sf = route.params.sffee;
    const total = (route.params.item.price * route.params.item.fruits_qty)
    const grandtotal = (route.params.item.price * route.params.item.fruits_qty + sf)

    const Checkout = async () => {
        try{
            const response = await fetch(`http://10.0.2.2:8000/api/place-order`, {
                method: 'POST',
                headers: {
                    Accept: 'applicaton/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart_id: route.params.item.id,
                    seller_id: route.params.item.seller_id,
                    user_id: route.params.item.user_id,
                    product_id: route.params.item.product_id,
                    order_name: route.params.item.name,
                    price: route.params.item.price,
                    product_qty: route.params.item.fruits_qty,
                    shippingfee: route.params.sffee,
                    total_price: grandtotal,
                    firstname: global.firstname,
                    middlename: global.middlename,
                    lastname: global.lastname,
                    shippingaddress: shippingaddress,
                    mobilephone: global.mobilephone,
                    modeofpayment: route.params.mopayment,
                    image: route.params.item.image,
                })
            });

            if((response).status === 200)
            {
                setAddress('');
                Checkout();
                Alert.alert("Order Successfully Placed!");
                navigation.navigate('Basket');

            }
            console.log(response)
            const json = await response.json();
            setOrders(json.message);
            console.log(json)
            }
            catch (error) {
            console.error(error);
            }
        }

        // const validation = () => {
        //     errors = [];

        //     if(shippingaddress.length <= 0)
        //     {
        //         errors.push("Shipping Address is Required")
        //     }
        //     if (errors.length === 0)
        //     {
        //     Checkout();
        //     Alert.alert("Order Successfully Placed!");
        //     navigation.navigate('Basket');
        //     }
        //     else
        //     {
        //     Alert.alert("Error!", errors.join('\n'))
        //     }
        // }
            
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Basket')}>
                    <Ionicons name="arrow-back-sharp" size={50} color="#000000" />
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> Checkout Form </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', margin: 10}}>
                        <Text style={styles.prodname}>{route.params.item.name}</Text>
                        <Text style={styles.prodprice}>Price: {route.params.item.price}</Text>
                        <Text style={styles.prodqty}>Qty: {route.params.item.fruits_qty}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.TitleInput}> Shipping Address</Text>
                    <TextInput 
                    placeholder='Enter Shipping Address'
                    style = {styles.input}
                    onChangeText = { (text) => setAddress(text) } 
                    />
                    <View style={styles.PContainer}>
                    <Text style={styles.TitleInput}> Mobile Number</Text>
                    <Text style={styles.info}>{global.mobilephone}</Text>
                    <Text style={styles.TitleInput}> Mode of Payment</Text>
                    <Text style={styles.info}>{route.params.mopayment}</Text> 
                    
                        <Text style={styles.TitleInput}> Shipping Fee</Text>
                        <Text  style={styles.info}>
                            
                            Php {sf}.00
                        </Text>
                        <Text style={styles.TitleInput}> Order Total</Text>
                        <Text  style={styles.info}>
                            Php {total}.00
                        </Text>

                    <Text style={styles.TitleInput}> Order Amount (fees included)</Text>
                        <Text  style={styles.info}>
                            Php {grandtotal}.00
                        </Text>
                        </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity onPress={ Checkout}>
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
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
      margin: 10,
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
    ProdPrice:{
        fontWeight: 'bold', 
        color: '#000000',
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
        margin: 0,
        fontWeight: 'bold',
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
    },
    info:{
        flex: 1,
        width: '85%',
        alignSelf: 'center',
        height: 30,
        borderRadius:10,
        padding: 5,
        color: 'gray',
        marginBottom: 15,
    },
    PContainer:{
        margin: 10,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        padding: 15,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
      },
})