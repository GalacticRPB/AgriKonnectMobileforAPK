import React, { useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';


const ProductContainer = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Text style={styles.resultText}>1 result found</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Product Details')}>
              <View style={styles.BestContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.ProdImg} source={require('../assets/lettuce.png')}/>
                    <View style={styles.ProdInfo}>
                      <Text style={styles.ProdName}>Lettuce</Text>
                      <Text style={styles.ProdPrice}>Php 40.00</Text>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.BestBasketButton}>
                        <Icons name='shopping-basket'
                            size={14}
                            color='white'
                            style={styles.AddtoBasket}/>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            </TouchableOpacity>
    </View>
    )
}

export default ProductContainer;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    BestText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        padding: 10,
        marginTop: -30,
    },
    BestContainer:{
        backgroundColor: 'white',
        flex: 1,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ProdImg:{
        marginTop: 10,
        marginLeft: 10,
        height: 90,
        width: 90,
    },
    ProdInfo: {
        margin: 20,
    },
    ProdName: {
        fontWeight: 'bold', 
        color: '#000000',
        fontSize: 15
    },
    ProdPrice:{
        fontWeight: 'bold', 
        color: '#000000',
    },
    BestBasketButton:{
        backgroundColor:"#31A05F",
        borderRadius: 10,
        padding: 12,
        width: 40,
        marginTop:30,
        marginLeft: 100,
    },
    resultText:{
        margin: 10, 
        fontWeight: 'bold',
        color: '#000000',
    }
})