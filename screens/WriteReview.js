import React, {useState} from 'react';
import {Text, Images, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const WriteReview = ({navigation}) => {
    // Set the default Ratings Selected
    const [defaultRating, setDefaultRating] = useState(3);
    // Set the max number of Ratings
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star
    const starImageFilled = require('../assets/star_fill.png');
    // Empty Star
    const starImageCorner = require('../assets/star.png');
    // Half Star
    //const startHalfFilled = require('../assets/star_fill.png');
    const onStarClick = (item, bool) => {
        if (bool) {
          item = item - 1 + 0;
        }
        setDefaultRating(item);
      };
    
      const CustomRatingBar = () => {
        return (
          <View style={styles.ratingBarStyle}>
            {maxRating.map((item, key) => {
              return (
                <View>
                  <Image
                    style={styles.imageStyle}
                    source={
                      item <= defaultRating
                        ? starImageFilled
                        : starImageCorner
                    }
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      position: 'absolute',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        width: 20,
                        height: 40,
                      }}
                      onPress={() => onStarClick(item, true)}
                    />
    
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        width: 20,
                        height: 40,
                      }}
                      onPress={() => onStarClick(item, false)}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        );
      };
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
                        <Text style={styles.Title}>Lettuce</Text>
                        <Text style={styles.kilo}>5 kg</Text>
                        <Text style={styles.amount}>Php 100.00</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <CustomRatingBar />
                        <Text style={styles.textStyle}>
                        {/* Display selected Ratings */}
                        {defaultRating} / {Math.max.apply(null, maxRating)}
                        </Text>

                        {/*<TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => alert('Selected Ratings ' + defaultRating)}>
                        {/* Button to display selected Ratings in alert box *
                        <Text style={styles.buttonTextStyle}>Get Selected Ratings</Text>
                        </TouchableOpacity>*/}
                        <Text style={styles.TitleInput}> What's your product experience?</Text>
                        <TextInput 
                        multiline
                        placeholder='Write your review'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                    </View>
            </View>
            <TouchableOpacity>
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