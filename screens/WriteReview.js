import React, {useEffect, useState} from 'react';
import {Text, Images, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const WriteReview = ({navigation, route}) => {

  const [toReview, setReview] = useState([]);
  const postReview = async () => {
    try
    {
      const response = await fetch('http://10.0.2.2:8000/api/review', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: route.params.item.customer_id,
          product_id: route.params.item.product_id,
          seller_id: route.params.item.seller_id,
          firstname: global.firstname,
          middlename: global.middlename,
          lastname: global.lastname,
          order_name: route.params.item.order_name,
          order_qty: route.params.item.order_qty,
          order_total: route.params.item.order_total,
          review: toReview,
        })
    });
  
    if ((response).status === 200)
      {
          setReview('');
          console.log(response)
          const json = await response.json();
          Alert.alert("Customer Updated Successfully");
          navigation.navigate('Profile');
      }
    }catch (error)
    {
      console.log("Test")
      console.error(error)
    }
    
}


    return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Icons name= 'arrow-back' size={50} color='#000000'/>
                </TouchableOpacity>
                <Text style={styles.SectionText}> Write a review </Text>
            </View>
            <View style={{padding: 50}}>
                    <View style={{flexDirection: 'column', margin: 10}}>
                        <Text style={styles.Title}>{route.params.item.order_name}</Text>
                        <Text style={styles.kilo}>{route.params.item.order_qty} kg</Text>
                        <Text style={styles.amount}>Php {route.params.item.order_total}.00</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
  
                        <Text style={styles.TitleInput}> What's your product experience?</Text>
                        <TextInput 
                        multiline
                        placeholder='Write your review'
                        style = {styles.input} 
                        onChangeText = { (text) => [setReview(text)] }
                        keyboardType='default'>
                        </TextInput>
                    </View>
            </View>
            <TouchableOpacity onPress={ postReview }>
                <Text style={styles.reviewbutton}>SUBMIT</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}
export default WriteReview;

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
    Title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 25
    },
    TitleInput:{
        color: '#5F5B5B',
        margin: 10,
    },
    input:{
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        fontSize: 18,
        height: 200,
        margin: 10
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle:{
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    testStyle:{
        textAlign: 'center',
        fontSize: 23,
        marginTop: 20,
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 15,
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#080566',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    ratingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    imageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    reviewbutton:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#388E3C',
        padding: 10,
        borderRadius: 12,
        alignSelf: 'center'
    }
})