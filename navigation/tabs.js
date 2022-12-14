import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*Icons Library-Start*/
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
/*Icons Library-End*/


import Home from '../screens/home';
import Products from '../screens/products';
import Transaction from '../screens/transaction';
import Account from '../screens/account';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: 'green',
                borderRadius: 15,
                height: 50,
                ...styles.shadow,
            },
            headerShown: false
            }}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                        <Image
                        source={
                            focused
                            ? require ('../assets/homegreen.png')
                            : require('../assets/home.png')
                        }
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        />
                        <Text
                        style={{
                            color: focused ? 'green' : 'F4F4F4', 
                            fontSize:10
                        }}>
                            HOME
                        </Text>
                    </View>
                )
            }} />

            <Tab.Screen 
            name="Products" 
            component={Products} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                         <Image
                            source={
                                focused
                                ? require ('../assets/green-store.png')
                                : require('../assets/store.png')
                            }
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            />
                        <Text
                        style={{
                            color: focused ?  'green' : 'F4F4F4', 
                            fontSize:10
                        }}>
                            PRODUCTS
                        </Text>
                    </View>
                )
            }} />

            <Tab.Screen 
            name="Transaction" 
            component={Transaction} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                       <Image
                            source={
                                focused
                                ? require ('../assets/transaction.png')
                                : require('../assets/transaction-green.png')
                            }
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            />
                        <Text
                        style={{
                            color: focused ?  'green' : 'F4F4F4', 
                            fontSize:10
                        }}>
                            TRANSACTIONS
                        </Text>
                    </View>
                )
            }} />

            <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
                       <Image
                            source={
                                focused
                                ? require ('../assets/accountgreen.png')
                                : require('../assets/account.png')
                            }
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            />
                        <Text
                        style={{
                            color: focused ?  'green' : 'F4F4F4', 
                            fontSize:10
                        }}>
                            ACCOUNT
                        </Text>
                    </View>
                )
            }} />
        </Tab.Navigator>

        
    );
}

const styles = StyleSheet.create ({
    shadow:{
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;