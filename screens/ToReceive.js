import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView, Alert} from 'react-native';
import MiIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import { FlatList } from 'react-native-gesture-handler';


const ToReceive = ({navigation}) => {

    const [forDelivery, setReceived] = useState([]);

    const id = global.id;
    const mobilephone = forDelivery.contactNo

    const toReceive = async () => {
        try{
            const response = await fetch(`http://10.0.2.2:8000/api/out-for-delivery/${id}`);
            const json = await response.json();
            setReceived(json.deliveries)
        }
        catch (error)
        {
            console.error(error)
        }
    }
    useEffect(() => {
      toReceive();
    }, []);
    console.log(forDelivery)

    const receive = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/order-delivered', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: forDelivery.product_id,
                    seller_id: forDelivery.seller_id,
                    customerId: forDelivery.customerId,
                    order_id: forDelivery.order_id,
                    order_name: forDelivery.order_name,
                    order_qty: forDelivery.order_qty,
                    order_price: forDelivery.order_price,
                    order_total: forDelivery.order_total,
                    firstname: forDelivery.firstname,
                    middlename: forDelivery.middlename,
                    lastname: forDelivery.lastname,
                    contactNo: forDelivery.contactNo,
                    shippingaddress: forDelivery.shippingaddress,
                    modeofpayment: forDelivery.modeofpayment,
                })
            });
        Alert.alert("Order Received");
        const json = await response.json();
        console.log("test for product")
        setReceived(json.message);
        } catch (error) {
        console.error(error);
        } 
    }


   
    return(
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Receive </Text>
                </View>
                <View style={styles.PayContainer}>
                        <View style={{flexDirection: 'row'}}>
                        <FlatList data = {forDelivery}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                            <ScrollView>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>Product Name: {item.order_name}</Text>
                                    <Text style={styles.amount}>Price: {item.order_total}</Text>
                                    <TouchableOpacity  onPress={ receive}>
                                        <Text style={styles.receivedbutton}>Order Received</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>

                            )}>
                        </FlatList>
                            
                        </View>
                </View>
        </View>
)}

export default ToReceive;


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
    PayContainer:{
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ButtonTitle:{
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
    },
    kilo: {
        color: '#000000',
    },
    amount:{
        color: '#000000',
    },
    ProdImg:{
        marginTop: 10,
        marginLeft: 10,
        height: 90,
        width: 90,
    },
    receivedbutton:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#388E3C',
        padding: 10,
        borderRadius: 12,
        marginTop: 10,
        marginLeft: 25,
    }
})