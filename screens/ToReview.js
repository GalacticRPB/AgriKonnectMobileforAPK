import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 


const ToReview = ({navigation}) => {
    
    const user_id = global.id
    const [toReview, setToReview] = useState([]);

    const review = async () => {
        try{
            const response = await fetch(`https://agrikonnect.herokuapp.com/api/to-review/${user_id}`);
            const json = await response.json();
            setToReview(json.delivered)
        }
        catch (error)
        {
            console.error(error)
        }
    }

    console.log(toReview)
    useEffect(() => {
      review();
    }, []);
    return(
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <AntDesign name="arrowleft" size={50} color="#5F5B5B" />
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Review </Text>
                </View>
                <View style={styles.PayContainer} onPress={()=>navigation.navigate('ToPay')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <FlatList data = {toReview}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                            // <ScrollView>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>{item.order_name}</Text>
                                    <Text style={styles.amount}>Total Order Price: Php {item.order_total}.00</Text>
                                </View>
                                    <TouchableOpacity onPress={() => {navigation.navigate('WriteReview', {item:item})}}>
                                        <Text style={styles.reviewbutton}>REVIEW</Text>
                                    </TouchableOpacity>
                                </View>
                            // </ScrollView>

                            )}>
                        </FlatList>
                            
                        </View>
                </View>
        </View>
)}

export default ToReview;


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
    reviewbutton:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#388E3C',
        padding: 10,
        borderRadius: 12,
        marginTop: 10,
        marginLeft: 25,
    }
})