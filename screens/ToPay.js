import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ToPay = ({navigation}) => {

    const [toPay, setToPay] = useState([]);

    let id = global.id

    const getToPay = async () => {
        try {
            const response = await fetch(`https://agrikonnect.herokuapp.com/api/show-to-pay/${id}`);
            const json = await response.json();
            setToPay(json.toPay)
        }
        catch (error)
        {
            // console.error(error)
        }
    }

    // console.log(toPay)
    useEffect(() => {
      getToPay();
    }, []);
  
    return(
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons name="arrow-back-sharp" size={50} color="#5F5B5B" />
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Pay </Text>
                </View>
               
                        <FlatList data = {toPay}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                            <ScrollView>
                                <View style={styles.PayContainer} onPress={()=>navigation.navigate('Account')}>
                                <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>{item.order_name}</Text>
                                    <Text style={styles.price}>Total Order Price: Php{item.total_price}.00</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.amount}>Order Status: </Text>
                                        <Text style={styles.pending}> Pending</Text>
                                    </View>
                                </View>
                                </View>
                                </View>
                            </ScrollView>

                            )}>
                        </FlatList>
                    </View>
)}

export default ToPay;


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
    price:{
        color: '#026206',
        fontWeight: 'bold'
    },
    amount:{
        color: '#5F5B5B',
    },
    pending:{
        fontWeight: 'bold',
        color: '#F22323'
    },
    ProdImg:{
        marginTop: 10,
        marginLeft: 10,
        height: 90,
        width: 90,
    },
})