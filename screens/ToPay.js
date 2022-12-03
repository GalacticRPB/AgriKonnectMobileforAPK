import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';



const ToPay = ({navigation}) => {
    return(
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}> To Pay </Text>
                </View>
                <View style={styles.PayContainer} onPress={()=>navigation.navigate('ToPay')}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={styles.ProdImg} source={require('../assets/lettuce.png')}/>
                            <View style={{flexDirection: 'column', margin: 10}}>
                                <Text style={styles.ButtonTitle}>Lettuce</Text>
                                <Text style={styles.kilo}>5 kg</Text>
                                <Text style={styles.amount}>Php 100.00</Text>
                            </View>
                        </View>
                </View>
        </View>
)}

export default ToPay;


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
})