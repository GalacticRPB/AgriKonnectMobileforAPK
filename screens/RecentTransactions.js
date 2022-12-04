import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import MiIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import { FlatList } from 'react-native-gesture-handler';


const RecentTransactions = ({navigation}) => {
    
    const [data, setData] = useState("");
    const id = global.id

    const getReview = async () => {
        try {
        const response = await fetch (`http://10.0.2.2:8000/api/customer-recent/${id}`);
        const json = await response.json();
        setData(json.reviews)
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
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> Recent Transactions </Text>
                </View>
            <View style={styles.TransaContainer} onPress={()=>navigation.navigate('ToPay')}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.ProdImg} source={require('../assets/lettuce.png')}/>
                        <View style={{flexDirection: 'column', margin: 10}}>
                        <FlatList data = {data}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item})=> (
                                <View style={styles.ProdInfo}>
                                <Text style={styles.ProdName}>Product: {item.order_name}</Text>
                                <Text style={styles.ProdPrice}>Price:  {item.order_total}.00</Text>
                                <Text style={styles.ProdPrice}>Quantity:  {item.order_qty}</Text>
                                </View>
                                )}>
                            
                            </FlatList>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default RecentTransactions;

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
    TransaContainer:{
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
})