import React from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

const App = () => {
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
    <Text style = {styles.hello}>Hello,</Text>
      <Text style = {styles.name}>Mr. Barnes</Text>

      <View style={styles.rectangle} />

      <Text style = {styles.recent}>Recently Sold</Text> 
      <View>
        
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

export default App;