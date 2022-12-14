import React,{useState} from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput, SectionList, Image, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Aicon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import { brgylist } from '../data/barangay';

const EditAddress = ({navigation}) => {
    const [selected,setSelected] = useState("");
    const data = ['Ipilan'];
    return (
        <View style={styles.container}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icons name= 'arrow-back' size={50} color='#000000'/>
                    </TouchableOpacity>
                    <Text style={styles.SectionText}>Edit Shipping Address </Text>
                </View>
                <Text style={styles.TitleInput}> Recepient Name </Text>
                        <TextInput 
                        placeholder='Recepient Name'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>
                <Text style={styles.TitleInput}> Phone Number</Text>
                        <TextInput 
                        placeholder='Phone Number'
                        style = {styles.input} 
                        keyboardType='numeric'>
                        </TextInput>
                <Text style={styles.TitleInput}> Barangay </Text>
                    <SelectDropdown
                        defaultButtonText={'Select Barangay'}
                        buttonStyle={styles.dropdown1BtnStyle}
                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                            data={data}
                            onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                            }}
                    />
                <Text style={styles.TitleInput}> Street/Subdivision/Building Name</Text>
                        <TextInput 
                        placeholder='Street/Subdivision/Building Name'
                        style = {styles.input} 
                        keyboardType='default'>
                        </TextInput>

                <View style={{flexDirection: 'row', justifyContent: 'space-around',margin: 10}}>
                    <TouchableOpacity>
                        <Text style={styles.savebutton}>SAVE</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
export default EditAddress;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#F4F4F4',
      paddingTop: 50,
    },
    SectionText: {
        color: '#5F5B5B',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        fontSize: 20,
        padding: 10,
    },
    dropdown1BtnStyle: {
        width: '95%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        margin: 10
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontWeight: 'bold'},
    dropdown1DropdownStyle: {backgroundColor: 'white'},
    dropdown1RowStyle: {backgroundColor: 'green', borderBottomColor: 'green'},
    dropdown1RowTxtStyle: {color: 'white', textAlign: 'left'},
    basketbutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    TitleInput:{
        color: '#5F5B5B',
        margin: 10,
    },
    input:{
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        fontSize: 18,
        padding: 12,
        margin: 10
    },
    savebutton:{
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
})