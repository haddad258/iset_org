import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

export default class ProfileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: "https://img.icons8.com/color/70/000000/cottage.png", title: "Order" },
                { id: 2, image: "https://img.icons8.com/color/70/000000/administrator-male.png", title: "Like" },
                { id: 3, image: "https://img.icons8.com/color/70/000000/filled-like.png", title: "Comment" },
                { id: 4, image: "https://img.icons8.com/color/70/000000/facebook-like.png", title: "Download" },
                { id: 5, image: "https://img.icons8.com/color/70/000000/shutdown.png", title: "Edit" },
            ],
        };
    }
    componentDidMount(){

        console.log(this.props.bontravailview)
    }

    render() {
        return (
            <View style={styles.container}>
                   <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>Work{this.props.bontravailview.status === "1" ? " Done" : " not Done"} </Text>
            </View>
          </View>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>demandeur:{this.props.bontravailview.demandeur }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>Code: {this.props.bontravailview.Code } </Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity><TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}> Heures marche: {this.props.bontravailview.Heuresmarche }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity><TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>Marque: {this.props.bontravailview.Marque }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>Type: {this.props.bontravailview.Type }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>defaillance: {this.props.bontravailview.defaillance }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>estimationRessource: {this.props.bontravailview.estimationRessource }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>main d'oeuvre: {this.props.bontravailview.mainoeuvre }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>tempsprevu: {this.props.bontravailview.tempsprevu }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>total fornitures: {this.props.bontravailview.totalfornitures }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.box}>
                        
                        <Text style={styles.title}>type de travail: {this.props.bontravailview.typedetravail }</Text>
                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                    </View>
                </TouchableOpacity>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#EE82EE",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FF6347",
        marginBottom: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 18,
        marginLeft: 4
    },
    btn: {
        marginLeft: 'auto',
        width: 40,
        height: 40,
    },
    body: {
        backgroundColor: "#E6E6FA",
    },
    box: {
        padding: 5,
        marginBottom: 2,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    username: {
        color: "#20B2AA",
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 10
    }
});
