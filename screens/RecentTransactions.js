import React,{useState}  from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import MiIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';


const RecentTransactions = ({navigation}) => {
    const [selected,setSelected] = useState("");
    const paymentmethod = ["Cash on Delivery", "Gcash"]
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
                            <Text style={styles.ButtonTitle}>Lettuce</Text>
                            <Text style={styles.kilo}>5 kg</Text>
                            <Text style={styles.amount}>Php 100.00</Text>
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