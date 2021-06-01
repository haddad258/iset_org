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
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from 'react-native-router-flux';

export default class Addinventaire extends Component {

    constructor(props) {
        super(props);
        this.state = {
            degreeA:true,
            degreeB:false,
            degreeC:false,
            verficication:false,
            arret:false


        };
    }

    componentDidMount(){
        console.log(this.props.bontravailview)

    }

    savetravail() {
        

        AsyncStorage.getItem('@storage_Key').then((value) => {
            axios.post("http://"+value+":3002/v3/addtravail/"+this.props.bontravailview, this.state).then((Response) => {
              Actions.InventaireC()
              console.log(Response.data)
        
        
            }).catch(()=>{
        
                Actions.InventaireC()

            })
        
          })
    
    
      }

    cardClickEventListener = (item) => {

        Alert.alert(item.name);
    }

    tagClickEventListener = (tagName) => {
        Alert.alert(tagName);
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
                                placeholder="date"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ date: value })} />
                        </View>
                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="heure"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ heure: value })} />
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
                        <Text>machine en arret</Text>
                        <CheckBox
                            value={this.state.arret}
                            onValueChange={(newValue) => { this.setState({ arret: newValue });  }}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>oui</Text>
                        <CheckBox
                            value={!(this.state.arret)}
                            onValueChange={(newValue) => { this.setState({ arret: !newValue }); }}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>non</Text>

                    </View>
                    <View style={styles.formContent}>
                        <Text>Dégrée d'urgence</Text>
                        <CheckBox
                            value={this.state.degreeA}
                            onValueChange={(newValue) => { this.setState({ degreeA: newValue }); this.setState({ degreeB: !newValue })  ;this.setState({ degreeC: !newValue }) }}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>A</Text>
                        <CheckBox
                            value={this.state.degreeB}
                            onValueChange={(newValue) => { this.setState({ degreeB: newValue }); this.setState({ degreeA: !newValue })  ;this.setState({ degreeC: !newValue }) }}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>B</Text>
                        <CheckBox
                            value={this.state.degreeC}
                            onValueChange={(newValue) => { this.setState({ degreeC: newValue }); this.setState({ degreeB: !newValue })  ;this.setState({ degreeA: !newValue }) }}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>C</Text>

                    </View>





                    <Text> cout d'intervention </Text>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Technicien"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ Technicien: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Heure de debut"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ startdate: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Heure de Fin"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ enddate: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Duree d'intervention"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ Duree: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="duree de chauffage machine"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ chauffduree: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="duree de l'aret"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ stopduree: value })} />
                        </View>

                    </View>
                    <Text>Nature d'intervention</Text>

                    <View style={styles.formContent}>
                        <CheckBox
                            value={this.state.Electrique}
                            onValueChange={(newValue) => this.setState({Electrique:newValue})}

                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>Electrique</Text>
                        <CheckBox
                            value={this.state.Mecanique}
                            onValueChange={(newValue) => this.setState({Mecanique:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>Mecanique</Text>


                    </View>
                    <View style={styles.formContent}>
                        <CheckBox
                            value={this.state.pneumatique}
                            onValueChange={(newValue) => this.setState({pneumatique:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>pneumatique</Text>
                        <CheckBox
                            value={this.state.soudure}
                            onValueChange={(newValue) => this.setState({soudure:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>soudure</Text>
                        {/* <CheckBox
                            value={this.state.gestionairecheck}
                            onValueChange={(newValue) => this.setState({value:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>Electrique</Text> */}
                    </View>

                    <View style={styles.formContent}>
                        <CheckBox
                            value={this.state.Hydraulique}
                            onValueChange={(newValue) => this.setState({Hydraulique:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>Hydraulique</Text>
                        <CheckBox
                            value={this.state.Batiment}
                            onValueChange={(newValue) => this.setState({Batiment:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>Batiment</Text>
                        <CheckBox
                            value={this.state.autre}
                            onValueChange={(newValue) => this.setState({autre:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>autre</Text>
                    </View>

                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Cause"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ cause: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="defaut"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ defaut: value })} />
                        </View>

                    </View>

                    <View style={styles.formContent}>

                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="correction"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ correction: value })} />
                        </View>
                    </View>
                    <View style={styles.formContent}>
                        <CheckBox
                            value={this.state.correctionparvis}
                            onValueChange={(newValue) => this.setState({correctionparvis:newValue})}

                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>purger vis</Text>
                        <CheckBox
                            value={this.state.correctionparmoule}
                            onValueChange={(newValue) => this.setState({correctionparmoule:newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>purger moule</Text>



                    </View>
                    <View style={styles.formContent}>
                        <Text>Verfication</Text>

                        <CheckBox
                            value={this.state.verficication}
                            onValueChange={(newValue) => this.setState({verficication:newValue})}

                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>oui</Text>
                        <CheckBox
                            value={(!this.state.verficication)}
                            onValueChange={(newValue) => this.setState({verficication:!newValue})}
                        />
                        <Text style={{ fontSize: 11, paddingTop: 8 }}>non </Text>



                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Reference"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ Reference: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Designation"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ Designation: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="quantité"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ quantity: value })} />
                        </View>

                    </View>




                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Actions preventive"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ actionpreventive: value })} />
                        </View>

                    </View>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="verification"
                                underlineColorAndroid='transparent'
                                onChangeText={(value) => this.setState({ verificationactions: value })} />
                        </View>

                    </View>
    
                    <TouchableOpacity onPress={() => this.savetravail()}>
                        <View style={styles.ViewH}>
                            <Text style={styles.textStyleH}> save inventaire </Text>
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
