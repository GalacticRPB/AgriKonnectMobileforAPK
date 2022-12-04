import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import SelectDropdown from "react-native-select-dropdown";

const Registration = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mobilephone, setMobilephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState("false");
  const [selectedImage, setSelectedImage] = useState([
    { fileName: "Choose a photo" },
  ]);

  const [data, setData] = useState([]);

  const RegisterSeller = async () => {
    const formData = new FormData();

    formData.append("firstname", firstname);
    formData.append("middlename", middlename);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("mobilephone", mobilephone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("verified", verified);

    // temp
    const file = await getFileFromUrl( selectedImage.uri, selectedImage.fileName);
    console.log(file)
    // [
    //     {
    //       "fileName":"rn_image_picker_lib_temp_ff3f441f-4f03-47ed-81b8-f24d2165126c.jpg",
    //       "fileSize":20546,
    //       "height":165,
    //       "type":"image/jpeg",
    //       "uri":"file:///data/user/0/com.anonymous.agrikonnectmobile/cache/rn_image_picker_lib_temp_ff3f441f-4f03-47ed-81b8-f24d2165126c.jpg",
    //       "width":200
    //     }
    // ]
    formData.append("image", file);
    try {
      const response = await fetch(
        "http://10.0.2.2:8000/api/register",
        {
          method: "POST",
          headers: {
            Accept: 'application/json',
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );
  
    }catch (error){
      console.error(error)
    }
    const json = await response.json();
    console.log("test")
    console.log(json);
  };

  async function getFileFromUrl(url, name, defaultType = 'image/jpeg'){
    console.log(url)
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  const launchImageLibraryHandler = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response) => {
      console.log(response);

      setSelectedImage(response.assets[0]);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      }
      if (response.errorCode) {
        console.log("Image picker error: ", response.errorCode);
      }
      if (response.assets) {
        console.log("Image picker response: ", response.assets);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.ground}>
        <View style={styles.foreground}>
          <Text style={styles.create}>Create an Account</Text>
          <Text style={styles.subcreate}>Sign up as a Seller</Text>
          <View style={styles.inputsBox}>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              onChangeText={(text) => setFirstname(text)}
            ></TextInput>

            <TextInput
              placeholder="Middle Name"
              style={styles.input}
              onChangeText={(text) => setMiddlename(text)}
            ></TextInput>

            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={(text) => setLastname(text)}
            ></TextInput>

            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={(text) => setUsername(text)}
            ></TextInput>

            <TextInput
              placeholder="Email "
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>

            <TextInput
              placeholder="Mobile Phone "
              style={styles.input}
              onChangeText={(text) => setMobilephone(text)}
            ></TextInput>
            
            <View style={styles.imageBox}>
              <Text style={styles.imageFilename} numberOfLines={1}>
                {selectedImage.fileName}
              </Text>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={launchImageLibraryHandler}>
                <Text style={styles.imageButtonText}>Select Image</Text>
              </TouchableOpacity>
            </View>
          </View>

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>

           

          <TouchableOpacity style={styles.button} onPress={RegisterSeller}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.ask}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SellerSignIn")}>
            <Text style={styles.loginButton}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    color: "#F4F4F4",
  },
  ground: {
    backgroundColor: "#F4F4F4",
    flex: 1,
    justifyContent: "center",
  },
  foreground: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  create: {
    color: "green",
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subcreate: {
    fontSize: 20,
    alignSelf: "center",
  },
  inputsBox: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  ask: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  loginButton: {
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
  },
  dropdown1BtnTxtStyle: {
    color: "#444",
    textAlign: "left",
    fontWeight: "bold",
  },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown1RowStyle: { backgroundColor: "green", borderBottomColor: "green" },
  dropdown1RowTxtStyle: { color: "white", textAlign: "left" },
  imageBox: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageFilename: {
    maxWidth: 200,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  imageButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 4,
  },
  imageButtonText: {
    color: "white",
  },
});

export default Registration;