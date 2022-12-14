import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';



const ToReview = ({navigation}) => {
    
    const user_id = global.id
    const [toReview, setToReview] = useState([]);

    const review = async () => {
        try{
            const response = await fetch(`http://10.0.2.2:8000/api/to-review/${user_id}`);
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
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Review </Text>
                </View>
                <View style={styles.PayContainer} onPress={()=>navigation.navigate('ToPay')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <FlatList data = {toReview}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                            <ScrollView>
                                <View style={{flexDirection: 'column', margin: 10}}>
                                    <Text style={styles.ButtonTitle}>Product Name: {item.order_name}</Text>
                                    <Text style={styles.amount}>Price: {item.order_total}</Text>
                                    <TouchableOpacity onPress={() => {navigation.navigate('WriteReview', {item:item})}}>
                                        <Text style={styles.reviewbutton}>REVIEW</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>

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