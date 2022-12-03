import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Text, View,StyleSheet,TouchableOpacity, TextInput, ScrollView} from 'react-native';

const SearchBar = (props) => {
    return (
        <View style = {styles.container}>
           <Icons style = {styles.searchIcon} name='search'/>
            <TextInput
            style ={styles.textIn}
            onChangeText={props.onChange}
            value={props.item}
            placeholder="Search a product">
            </TextInput>
        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    searchIcon: {
        fontSize: 25,
        alignSelf: 'center',
        margin: 10,
    },
    textIn:{
        fontSize: 18,
        color:'#5F5B5B',
        fontFamily: 'Poppins',
    }
})