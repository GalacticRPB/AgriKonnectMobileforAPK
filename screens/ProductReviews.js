import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const ProductReviews = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="arrow-back-sharp" size={50} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.SectionText}> Product Reviews </Text>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'column', margin: 10}}>
                    <View style={styles.ButtonContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={styles.sellerPhoto} source={require('../assets/lettuce.png')}/>
                            <View style={{flexDirection: 'column', margin: 10}}>
                                <Text style={styles.ButtonTitle}>name</Text>
                                <Text style={styles.rating}>Rating: 4/5</Text>
                                <Text style={styles.comment}>Comment: Fast delivery!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductReviews;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4',
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        padding: 10,
    },
    sellerPhoto: {
        width: 50,
        height: 50,
        marginTop: 10,
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
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
    },
    rating: {
        color: '#000000',
    },
    comment:{
        color: '#000000',
    }
})