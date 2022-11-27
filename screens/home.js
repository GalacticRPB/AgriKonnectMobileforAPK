import React from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

const Home = ({navigation}) => {
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
    <Text style = {styles.hello}>Hello,</Text>
      <Text style = {styles.name}>Mr. Barnes</Text>

      <View style={styles.rectangle} />

      <Text style = {styles.recent}>Recently Sold</Text> 

        <View style = {[styles.rSoldBox, styles.elevation]}>
        <View style={styles.rectangleSold} />
          <View style={styles.soldItem}>
            <Text style={styles.itemName}>
              Durian
            </Text>
            <Text>
              June 1, 2021
            </Text>
          </View>
          <View style={styles.bottom}>
          <TouchableOpacity style = {styles.button} onPress={()=> navigation.navigate('TransactionDetails')}>
            <Text style = {styles.buttonText}>
              View
              </Text>
          </TouchableOpacity>
        </View>
        </View>


    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    color: '#F4F4F4',
  },
  ground:{
    backgroundColor: '#F4F4F4',
    flex:1,
    justifyContent: 'center',
  },
  foreground:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  name:{
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
   
  },
  recent:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  rSoldBox:{
    marginTop: 15,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: 'nowrap',
    borderRadius: 8,
    height: 80,
    padding: 5,
    alignItems: 'center',
  },
  elevation: {
    elevation: 10,
    shadowColor: 'black',
  },  
  rectangleSold: {
    width: 70,
    height: 70,
    borderRadius: 1,
    backgroundColor: "#388E3C",
    marginRight: 20,
  },
  itemName:{
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  soldItem:{

  },
  bottom:{
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 2,
    marginTop: 0,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rectangle: {
    width: 'auto',
    height: 250,
    borderRadius: 10,
    backgroundColor: "#388E3C",
    marginTop: 10,
  },
  hello:{
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },


})

export default Home;