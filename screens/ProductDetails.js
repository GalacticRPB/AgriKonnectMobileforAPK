import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import MiIcons from 'react-native-vector-icons/MaterialIcons';

const ProductDetails = ({navigation, route}) => {

    const [data, setData] = useState("");
    const [review, setReview] = useState([]);
    const [value, setQuantity] = useState(1);

    let x = global.id

    function handleIncrement() {
        //setCount(prevCount => prevCount+=1);
        if(value < 10)
        {
          setQuantity(prevCount => prevCount + 1);
        }
    }

    function handleDecrement() {
        if(value > 1)
        {
          setQuantity(prevCount => prevCount - 1);
        }
    }

    const AddCart = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/addtoCart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: route.params.item.id,
                    customerId: x,
                    seller_id: route.params.item.user_id,
                    fruits_qty: value,
                    name: route.params.item.name,
                    price: route.params.item.price,
                })
            });
        const json = await response.json();
        console.log("test")
        setData(json.message);
        } catch (error) {
        console.error(error);
        } 
    }

    const getFruits = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/products/${route.params.item.id}`);
        const json = await response.json();
        setReview(json.reviews);
        } catch (error) {
            console.error(error);
        } 
    }
    
    useEffect(() => {
        getFruits();
    }, []);
    
    console.log(review)
    return(
        <View style={styles.container}>
            <View style={{padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Fruits')}>
                <Icons name= 'arrow-back' size={50} color='#000000'/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{flexDirection:'column', alignSelf: 'center'}}>
                    <Image source={require('../assets/lettuce.png')}/>
                    <Text style={styles.Headertext}>{route.params.item.name}</Text>
                    <Text style={styles.Subtext}>Product Category:</Text>
                    <Text style={styles.bodytext}>{route.params.item.category}</Text>
                    <Text style={styles.Subtext}>Growing Method:</Text>
                    <Text style={styles.bodytext}>{route.params.item.description}</Text>
                    <Text style={styles.Subtext}>Price:</Text>
                    <Text style={styles.bodytext}>{route.params.item.price}</Text>
                    <Text style={styles.Subtext}>Quantity:  {value}kg</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={handleDecrement(route.params.item.id)}><Icons name ='minus' style={styles.decrementbutton}/></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.numberContainer}>{value}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleIncrement(route.params.item.id)}><Icons name ='plus' style={styles.incrementbutton}/></TouchableOpacity>
                    <Text>kg</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 60}}>
                    <Text style={styles.sellername}>Seller: {route.params.item.seller_name}</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 60, marginTop: 10}}>
                    <Text>Reviews</Text>
                </View>
                <ScrollView>
                    <View style={styles.BestContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <FlatList data = {review}
                                keyExtractor={({id}, index) => id}
                                renderItem= {({item}) => (
                                    <ScrollView>
                                        <View>
                                            <Text style={styles.ButtonTitle}>Product: {item.order_name}</Text>
                                            <Text style={styles.rating}>Quantity: {item.order_qty}</Text>
                                            <Text style={styles.comment}>Comment: {item.review}</Text>
                                        </View>
                                    </ScrollView>
                                )}>
                            </FlatList>
                        </View>
                    </View>
                </ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity onPress={ AddCart }>
                            <Text style={styles.basketbutton}>ADD TO BASKET</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetails;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4'
    },
    Headertext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
    },
    Subtext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bodytext:{
        color: '#000000',
        fontSize: 12,
    },
    sellerPhoto: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    sellername:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
    },
    visitbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    forwardIcon:{ 
        alignSelf: 'center'
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
    },
    basketbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    buybutton:{
        backgroundColor: '#F22323',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    decrementbutton: {
        backgroundColor:"#F22323",
        borderRadius: 10,
        padding: 10,
        color: 'white',
        marginBottom: 5,
    },
    incrementbutton: {
    backgroundColor:"#388E3C",
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 5
    },
    numberContainer: {
        backgroundColor:"#FFF59D",
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        marginBottom: 5,
    },
    TotalContainer:{
    backgroundColor: 'white',
    justifyContent: 'space-between'
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
})