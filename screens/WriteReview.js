import React, {useEffect, useState} from 'react';
import {
  Text,
  Images,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SectionList,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const WriteReview = ({navigation, route}) => {

  const [review, setReview] = useState([]);
  const [setreview, setToReview] = useState([]);

    console.log(route)

  const submitReview = async () => {
    try{
        const response = await fetch(`https://agrikonnect.herokuapp.com/api/review`, {
            method: 'POST',
            headers: {
                Accept: 'applicaton/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_id: route.params.item.order_id,
                customer_id: route.params.item.customerId,
                product_id: route.params.item.product_id,
                seller_id: route.params.item.seller_id,
                firstname: global.firstname,
                middlename: global.middlename,
                lastname: global.lastname,
                order_name: route.params.item.order_name,
                order_qty: route.params.item.order_qty,
                order_total: route.params.item.order_total,
                review: review,
            })
        });

        if((response).status === 200)
        {
            setReview('');
            Alert.alert("Review Submitted");
            navigation.navigate('OrderReviews');
        }
       
        const json = await response.json();
        setToReview(json.review);
        console.log(json);
        }
        catch (error) {
        console.error(error);
        }
    }

    return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{flexDirection: 'row', padding: 10, marginTop: 50}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <AntDesign name="arrowleft" size={50} color="#5F5B5B" />
                </TouchableOpacity>
                <Text style={styles.SectionText}> Write a review </Text>
            </View>
            <View style={{margin: 20, marginBottom: -20,}}>
                    <View style={{flexDirection: 'column', margin: 10}}>
                        <Text style={styles.Title}>{route.params.item.order_name}</Text>
                        <Text style={styles.kilo}>{route.params.item.order_qty} kg</Text>
                        <Text style={styles.amount}>Php {route.params.item.order_total}.00</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
  
                        <Text style={styles.TitleInput}> What's your product experience?</Text>
                    </View>
            </View>
            <TextInput 
                        multiline
                        placeholder='Write your review'
                        style = {styles.input} 
                        onChangeText = { (text) => [setReview(text)] }
                        keyboardType='default'>
                        </TextInput>
            <TouchableOpacity onPress={ submitReview }>
                <Text style={styles.reviewbutton}>SUBMIT</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};
export default WriteReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  Title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  TitleInput: {
    color: '#5F5B5B',
    margin: 10,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    fontSize: 18,
    margin: 30,
    padding: 20,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  testStyle: {
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
  reviewbutton: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 12,
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 150,
    height: 50,
    fontSize: 18,
  },
});