import React,{useEffect, useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const RecentTransactions = ({navigation}) => {
    
    const [data, setData] = useState("");
    const id = global.id

    const getReview = async () => {
        try {
        const response = await fetch (`https://agrikonnect.herokuapp.com/api/customer-recent/${id}`);
        const json = await response.json();
        setData(json.recent)
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
                    <Ionicons name="arrow-back-sharp" size={50} color="#5F5B5B" />
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> Recent Transactions </Text>
                </View>
            <View  onPress={()=>navigation.navigate('ToPay')}>
                
                        <FlatList data = {data}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item})=> (
                                <ScrollView>
                                    <View style={styles.TransaContainer} onPress={()=>navigation.navigate('ToPay')}>
                                    <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'column', margin: 10}}>
                                    <View style={styles.ProdInfo}>
                                    <Text style={styles.ProdName}>{item.order_name}</Text>
                                    <Text style={styles.ProdPrice}>Total Order Price: Php {item.order_total}.00</Text>
                                    <Text style={styles.ProdPrice}>Quantity:  {item.order_qty}</Text>
                                    </View>
                                    </View>
                                    </View>
                                     </View>
                                </ScrollView>
                                )}>
                            
                            </FlatList>
                      
            </View>
        </View>
    )
}

export default RecentTransactions;

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
    ProdName:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    ProdPrice: {
        color: '#5F5B5B',
    },
    TransaContainer:{
        padding: 20,
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