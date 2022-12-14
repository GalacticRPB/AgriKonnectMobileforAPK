import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';
import McIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiIcons from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const CustomerProfile = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.UserIcon}  onPress={()=>navigation.navigate('EditCustomerProfile')}>
                        <MaterialIcons name="account-circle" size={100} color="white" />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.Username}>{global.username}</Text>
                        <Text style={styles.Email}>{global.email}</Text>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('ToPay')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <MaterialIcons name="payments" size={50} color="#5F5B5B" />
                            <Text style={styles.ButtonTitle}> To Pay</Text>
                            <MaterialIcons style={styles.forwardIcon} name="arrow-forward-ios" size={20} color="#5F5B5B" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('ToReceive')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <MaterialIcons name="receipt" size={50} color="#5F5B5B" />
                            <Text style={styles.ButtonTitle}> To Receive</Text>
                            <MaterialIcons style={styles.forwardIcon} name="arrow-forward-ios" size={20} color="#5F5B5B" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('ToReview')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <MaterialIcons name="rate-review" size={50} color="#5F5B5B" />
                            <Text style={styles.ButtonTitle}> To Review</Text>
                            <MaterialIcons style={styles.forwardIcon} name="arrow-forward-ios" size={20} color="#5F5B5B" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('RecentTransactions')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Ionicons name="receipt" size={50} color="#5F5B5B" />
                            <Text style={styles.ButtonTitle}> Recent Transactions</Text>
                            <MaterialIcons style={styles.forwardIcon} name="arrow-forward-ios" size={20} color="#5F5B5B" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={()=>navigation.navigate('OrderReviews')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <MaterialIcons name="border-color" size={50} color="#5F5B5B" />
                            <Text style={styles.ButtonTitle}> Order Reviews </Text>
                            <MaterialIcons style={styles.forwardIcon} name="arrow-forward-ios" size={20} color="#5F5B5B" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={ () => [Alert.alert("You Have been successfully logged out"), navigation.popToTop()] }>
                        <View style={{flexDirection: 'row'}}>
                            <MaterialIcons name="logout" size={50} color="#5F5B5B" />
                            <Text style={{marginTop: 10, marginLeft: 10, color: '#000000'}}> Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomerProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#388E3C',
      paddingTop: 50,
    },
    subcontainer:{
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    UserIcon:{
        padding: 50
    },
    Username: {
        marginTop: 60,
        fontSize: 15,
        color:'#FFFFFF'
    },
    Email:{
        color:'#FFFFFF',
        fontSize: 15,
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
        alignSelf: 'center',
        textAlign: 'left',
        color: '#000000'
    },
    forwardIcon:{ 
        alignSelf: 'center'
    }
})