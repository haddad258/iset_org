import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen() {
  const [username, setusername] = useState("chefmaintenance");
  const [password, setPassword] = useState("chefmaintenance");
  const [server, setserver] = useState("server");
  const login = () => {

    console.log(username)
    console.log(password)

    if (username === "chef" && password === "chef") {
      Actions.Inventaire()

      storeData(server)

    } else if(username === "operateur" && password === "operateur"){
      Actions.InventaireC()
    }else{

      alert("check your server")
    }
  }

const  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  ///////////action creation bon inventaire  admin   cheff maintenance bon interventuion  ----  bon de travail 

  //////// action consulter bon d 'intervention   operateu  --- consulter list des bon d intevention ----- fiche demande d intervention

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.jpeg")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setusername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="server."
          placeholderTextColor="#003f5c"
          onChangeText={(server) => setserver(server)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});