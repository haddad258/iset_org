import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from 'react-native-router-flux';

export default class AddBontravail extends Component {

  constructor(props) {
    super(props);
    this.state = {


    };
  }

  cardClickEventListener = (item) => {

    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }
  saveBond() {
    AsyncStorage.getItem('@storage_Key').then((value) => {
    axios.post("http://"+value+":3002/v3/addBon", this.state).then((Response) => {
      Actions.Inventaire()


    }).catch(()=>{
      Actions.Inventaire()
      alert("check server")
    })

  })


  }

  render() {
    return (

      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={styles.ViewH}>
            <Text style={styles.textStyleH}> retour </Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="demandeur"
                underlineColorAndroid='transparent'
                onChangeText={(chef) => this.setState({ demandeur: chef })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="date d'enrigstrement"
                underlineColorAndroid='transparent'
                onChangeText={(savedate) => this.setState({ dateenrigstrement: savedate })} />
            </View>
          </View>

          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="date d'ouverture"
                underlineColorAndroid='transparent'
                onChangeText={(date) => this.setState({ dateouverture: date })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="date d'cloture"
                underlineColorAndroid='transparent'
                onChangeText={(date) => this.setState({ datecloture: date })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="equipement"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ equipement: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Marque"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ Marque: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Type"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ Type: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Code"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ Code: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Heures de marche"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ Heuresmarche: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="priorité"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ priorite: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="nature de travail"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ naturedetravail: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Frequence"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ Frequence: value })} />
            </View>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="temps prevu"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ tempsprevu: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Derniere fois"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ darnierefois: value })} />
            </View>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="Type de taravail"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ typedetravail: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="estimation Ressource"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ estimationRessource: value })} />
            </View>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="justification non-excution"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ justfication: value })} />
            </View>

          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="liste de controle"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ listdecontrole: value })} />
            </View>
          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="cause de la defaillance"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ defaillance: value })} />
            </View>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="piece defectueuse"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ defectueuse: value })} />
            </View>
          </View>
          <Text> cout d'intervention </Text>

          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="total main d'oeuvre"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ mainoeuvre: value })} />
            </View>

          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="total fornitures"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ totalfornitures: value })} />
            </View>

          </View>
          <View style={styles.formContent}>
            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                ref={'txtSearch'}
                placeholder="rapport d'intervention"
                underlineColorAndroid='transparent'
                onChangeText={(value) => this.setState({ rapportintervention: value })} />
            </View>

          </View>
          <TouchableOpacity onPress={() => this.saveBond()}>
            <View style={styles.ViewH}>
              <Text style={styles.textStyleH}> save Bon de travail </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  ViewH: {
    backgroundColor: 'rgb(24, 124, 140)',
    height: 50,
    color: 'rgb(255,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleH: {
    color: 'rgb(255,255,255)',
    fontSize: 20,
  },
  formContent: {
    flexDirection: 'row',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center'
  },
  inputs: {
    height: 45,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center'
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});
