import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const ToReceive = ({navigation}) => {

    const [forDelivery, setReceived] = useState([]);

    const id = global.id;
    console.log(forDelivery)

    const toReceive = async () => {
        try{
            const response = await fetch(`https://agrikonnect.herokuapp.com/api/out-for-delivery/${id}`);
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
            const response = await fetch('https://agrikonnect.herokuapp.com/api/order-delivered', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: forDelivery[0].product_id,
                    seller_id: forDelivery[0].seller_id,
                    customerId: forDelivery[0].customerId,
                    order_id: forDelivery[0].order_id,
                    order_name: forDelivery[0].order_name,
                    order_qty: forDelivery[0].order_qty,
                    order_price: forDelivery[0].order_price,
                    order_total: forDelivery[0].order_total,
                    firstname: forDelivery[0].firstname,
                    middlename: forDelivery[0].middlename,
                    lastname: forDelivery[0].lastname,
                    contactNo: forDelivery[0].contactNo,
                    shippingaddress: forDelivery[0].shippingaddress,
                    modeofpayment: forDelivery[0].modeofpayment,
                })
            });
        Alert.alert("Order Received");
        navigation.navigate('ToReview');
        const json = await response.json();
        console.log(json)
        setReceived(json.message);
        } catch (error) {
        console.error(error);
        } 
    }


   
    return(
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons name="arrow-back-sharp" size={50} color="#5F5B5B" />
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Receive </Text>
                </View>
                        <View style={{flexDirection: 'row'}}>
                        <FlatList data = {forDelivery}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                            <ScrollView>
                                  <View style={styles.PayContainer} onPress={()=>navigation.navigate('Account')}>
                                <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>{item.order_name}</Text>
                                    <Text style={styles.amount}>Total Order Price: Php {item.order_total}.00</Text>
                                    </View>
                                    <TouchableOpacity  onPress={ receive}>
                                        <Text style={styles.receivedbutton}>Order Received</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                            </ScrollView>

                            )}>
                        </FlatList>
                            
                        </View>
                </View>
)}

export default ToReceive;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
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
        fontSize: 20
    },
    kilo: {
        color: '#000000',
    },
    amount:{
        color: '#026206',
        fontWeight: 'bold'
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