import React, { useEffect, useState } from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';


const OrderReview = ({navigation}) => {

    const [data, setData] = useState("");
    let id = global.id

    const getReview = async () => {
        try {
        const response = await fetch (`http://10.0.2.2:8000/api/customer-review/${id}`);
        const json = await response.json();
        setData(json.review)
        }
        catch (error)
        {
        console.error(error)
        }
    }


    console.log(data)
    useEffect(() => {
        getReview();
    }, []);

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigation')}>
                <Icons name= 'arrow-back' size={50} color='#000000'/>
                </TouchableOpacity>
                <Text style={styles.SectionText}> Product Reviews </Text>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'column', margin: 10}}>
                    <View style={styles.ButtonContainer}>
                        <View style={{flexDirection: 'row'}}>
                        <FlatList data = {data}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item})=> (
                                <View style={styles.ProdInfo}>
                                <Text style={styles.ProdName}>Product: {item.order_name}</Text>
                                <Text style={styles.ProdPrice}>Price:  {item.order_total}.00</Text>
                                <Text style={styles.ProdPrice}>Quantity:  {item.order_qty}</Text>
                                <Text style={styles.ProdPrice}>Review:  {item.review}</Text>
                                </View>
                                )}>
                            
                            </FlatList>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderReview;


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
    sellerPhoto: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    ButtonContainer:{
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
    rating: {
        color: '#000000',
    },
    comment:{
        color: '#000000',
    }
})