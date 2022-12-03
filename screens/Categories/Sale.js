import React, { useState } from 'react';
import {Text, View,StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import BottomNavigation from '../../components/BottomNavigation';
import SearchBar from '../../components/SearchBar';

const Sale = () => {
    const [term, setItem] = useState ('');
  return (
    <View style={styles.container}>
      <BottomNavigation/>
      <ScrollView>
        <Text style={styles.SectionText}> Categories </Text>
        <View style = {styles.horizontalView}>
          <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                      <Image style={styles.CategIcon} source={require('../../assets/vegetables.png')}/>
                      <Text style={styles.Categname}>Vegetables</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                      <Image style={styles.CategIcon} source={require('../../assets/fruit.png')}/>
                      <Text style={styles.Categname}>Fruits</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                      <Image style={styles.CategIcon} source={require('../../assets/sale.png')}/>
                      <Text style={styles.Categname}>Sale</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonCategories}>
                <View style={styles.imgContainer}>
                  <Image style={styles.CategIcon} source={require('../../assets/free-delivery.png')}/>
                  <Text style={styles.Categname}>Free Delivery</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={styles.SectionText}> Sale </Text>
        <ScrollView>
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                  <Image style={styles.ProdImg} source={require('../../assets/lettuce.png')}/>
                  <View style={styles.ProdInfo}>
                    <Text style={styles.ProdName}>Lettuce</Text>
                    <Text style={styles.ProdPrice}>Php 40.00/kg</Text>
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
            <View style={styles.BestContainer}>
              <View style={{flexDirection: 'row'}}>
                  <Image style={styles.ProdImg} source={require('../../assets/lettuce.png')}/>
                  <View style={styles.ProdInfo}>
                    <Text style={styles.ProdName}>Lettuce</Text>
                    <Text style={styles.ProdPrice}>Php 40.00/kg</Text>
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
        </ScrollView>
      </ScrollView>
    </View>
    );
}

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F4F4'
  },
  headercontainer:{
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  title: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
  },
  subtitle: {
    color: '#5F5B5B',
    fontFamily: 'Poppins',
    fontSize: 15
  },
  BasketIcon:{
    alignSelf: 'center'
  },
  BasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
  },
  SectionText: {
    color: '#5F5B5B',
    fontWeight:'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    padding: 10,
  },
  horizontalView: {
    height: 130, 
    margin: 10,
  },
  buttonCategories:{
    backgroundColor: '#31A05F',
    height: 130,
    width: 130,
    borderRadius: 20,
    margin: 1,
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  CategIcon:{
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  Categname: {
    fontSize: 20, 
    fontFamily: 'Poppins', 
    fontWeight: 'bold', 
    color: '#FFFFFF',
    textAlign: 'center'
  },
  horizontalReco: {
    height: 300,
    margin: 1,
  },
  RecoContainer:{
    height: 150,
    width: 170,
    margin: 5,
  },
  productContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  RecoImg:{
    height: 90,
    width: 90,
    alignSelf: 'center'
  },
  Reconame: {
    fontSize: 20, 
    fontFamily: 'Poppins', 
    fontWeight: 'bold', 
    color: '#FFFFFF',
    margin: 10,
    textAlign: 'left'
  },
  AddtoBasket:{
    alignSelf: 'center'
  },
  AddtoBasketButton:{
    backgroundColor:"#31A05F",
    borderRadius: 10,
    padding: 12,
    width: 40,
    marginTop:10,
    marginLeft: 110,
  },
  Recoprice: {
    fontSize: 15, 
    fontFamily: 'Poppins', 
    color: '#FFFFFF',
    margin: 10,
    textAlign: 'left'
  },
  InfoContainer: {
    backgroundColor: "#31A05F",
    height: 110, 
    borderRadius: 20,
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
    marginLeft: 90,
  },
})