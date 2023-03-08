import React, { useEffect, useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity,FlatList, SectionList, Image, ScrollView, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ProductDetails = ({navigation, route}) => {

    const [data, setData] = useState("");
    const [review, setReview] = useState([]);
    const [value, setQuantity] = useState(1);

    let x = global.id

    let product_id = route.params.item.id
    console.log(product_id)
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
            const response = await fetch('https://agrikonnect.herokuapp.com/api/addtoCart', {
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
                    image: route.params.item.image,
                    price: route.params.item.price,
                    
                })
                
            });
        Alert.alert('Product Added to Cart');
        const json = await response.json();
        // console.log("test for vegetables")
        // console.log(response)
        setData(json.message);
        } catch (error) {
        // console.error(error);
        } 
    }

    const getFruits = async () => {
        try {
        const response = await fetch(`https://agrikonnect.herokuapp.com/api/viewfruit/${product_id}`);
        const json = await response.json();
        setReview(json.reviews);
        } catch (error) {
            // console.error(error);
        } 
    }
    useEffect(() => {
        getFruits();
    }, []);

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row',padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Fruits')}>
                <Ionicons name="arrow-back-sharp" size={50} color="#5F5B5B" />
                </TouchableOpacity>
                <Text style={styles.SectionText}>Product Details</Text>
            </View>
            <Text style={styles.Headertext}>{route.params.item.name}</Text>
            <ScrollView>
                <View style={styles.PContainer}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={styles.sellername}>Seller:</Text>
                        <Text style={styles.bodytext}>{route.params.item.seller_name}</Text>
                    </View>
                </View>
                
                <View style={styles.PContainer}>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.Subtext}>Product Category:</Text>
                    <Text style={styles.bodytext}>{route.params.item.category}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.Subtext}>Growing Method:</Text>
                    <Text style={styles.bodytext}>{route.params.item.description}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.Subtext}>Price:</Text>
                    <Text style={styles.bodytext}>Php {route.params.item.price}.00</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}> 
                    <Text style={styles.Subtext}>Quantity: </Text>
                    <Text style={styles.bodytext}>{value}kg</Text>
                </View>
                <View style={{flexDirection:'column', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', marginLeft: 20, alignItems: 'center'}}>
                        <TouchableOpacity onPress={handleDecrement}><Entypo name="minus" color="black" style={styles.decrementbutton}/></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.numberContainer}>{value}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={handleIncrement}><Entypo name="plus" style={styles.incrementbutton} /></TouchableOpacity>
                        <Text style={{margin: 5}}>kg</Text>
             
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                        <TouchableOpacity onPress={ AddCart }>
                            <Text style={styles.basketbutton}>ADD TO BASKET</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
               </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold',
                     color: '#5F5B5B',}}>Reviews</Text>
                </View>
                {/* <ScrollView> */}
                    <View style={styles.BestContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <FlatList data = {review}
                                keyExtractor={({id}, index) => id}
                                renderItem= {({item}) => (
                                    // <ScrollView>
                                        <View>
                                            <Text style={styles.rating}>Name: {item.firstname} {item.lastname}</Text>
                                            <Text style={styles.rating}>Quantity: {item.order_qty}</Text>
                                            <Text style={styles.comment}>Comment: {item.review}</Text>
                                        </View>
                                    // </ScrollView>
                                )}>
                            </FlatList>
                        </View>
                    </View>
                {/* </ScrollView> */}
                
                    
            </ScrollView>
        </View>
        
    )
}

export default ProductDetails;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
      margin: 10,
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontSize: 20,
        padding: 10,
    },
    PContainer:{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        padding: 15,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
      },
    Headertext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign:'center',
        marginBottom: 10,
    },
    Subtext:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bodytext:{
        color: '#000000',
        fontSize: 15,
    },
    sellerPhoto: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    sellername:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    PContainer:{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        padding: 15,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
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
        color: '#5F5B5B',
    },
    rating: {
        color: '#5F5B5B',
    },
    comment:{
        color: 'black',
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
        borderRadius: 5,
        padding: 10,
        color: 'white',
        marginBottom: 5,
    },
    incrementbutton: {
    backgroundColor:"#388E3C",
    borderRadius: 5,
    padding: 10,
    color: 'white',
    marginBottom: 5
    },
    numberContainer: {
        backgroundColor:"#FFF59D",
        borderRadius: 4,
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
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
})