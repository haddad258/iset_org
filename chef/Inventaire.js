import axios from 'axios';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Inventaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Lorem ipsum dolor", time: "2018-08-01 12:15 pm", image: "https://via.placeholder.com/400x200/FFB6C1/000000", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..." },
        { id: 2, title: "Sit amet, consectetuer", time: "2018-08-12 12:00 pm", image: "https://via.placeholder.com/400x200/7B68EE/000000", description: "Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..." },
        { id: 3, title: "Dipiscing elit. Aenean ", time: "2017-08-05 12:21 pm", image: "https://via.placeholder.com/400x200/000080/000000", description: "Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..." },
        { id: 4, title: "Commodo ligula eget dolor.", time: "2015-08-12 12:00 pm", image: "https://via.placeholder.com/400x200/48D1CC/000000", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..." },
        { id: 5, title: "Aenean massa. Cum sociis", time: "2013-06-12 12:11 pm", image: "https://via.placeholder.com/400x200/9370DB/000000", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula..." },
        { id: 6, title: "Natoque penatibus et magnis", time: "2018-08-12 12:56 pm", image: "https://via.placeholder.com/400x200/DA70D6/000000", description: "Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula..." },
        { id: 7, title: "Dis parturient montes, nascetur", time: "2018-08-12 12:33 pm", image: "https://via.placeholder.com/400x200/DDA0DD/000000", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..." },
        { id: 8, title: "Ridiculus mus. Donec quam", time: "2018-06-12 12:44 pm", image: "https://via.placeholder.com/400x200/4169E1/000000", description: "Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula..." },
        { id: 9, title: "Felis, ultricies nec, pellentesque", time: "2012-07-12 12:23 pm", image: "https://via.placeholder.com/400x200/FA8072/000000", description: "Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula..." },
      ],
      refresh: false,
      listinve: []
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('@storage_Key').then((value) => {
      console.log(value)
      axios.get("http://" + value + ":3002/v3/listinvetaire").then((Response) => {
        this.setState({ listinve: Response.data.content })
        console.log(Response.data.content[10])
        this.setState({ refresh: false })


      }).catch(() => {
        alert("deconected and fix server")
      })
    })


  }

  listFilesAndDirectories() {
    AsyncStorage.getItem('@storage_Key').then((value) => {
      console.log(value)
      axios.get("http://" + value + ":3002/v3/listinvetaire").then((Response) => {
        this.setState({ listinve: Response.data.content })
        console.log(Response.data)
        this.setState({ refresh: false })


      }).catch(() => {
        alert("deconected and fix server")
      })
    })

  }
  logout(){
    AsyncStorage.removeItem('@storage_Key').then(()=>{
      Actions.popTo('Login')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.logout()()}>
          <View style={styles.ViewH}>
            <Text style={styles.textStyleH}> Deconnexion</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.AddBontravail()}>
          <Image style={styles.image} source={require("../assets/plus.png")} />

        </TouchableOpacity>
        <FlatList style={styles.list}
          data={this.state.listinve}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={() => this.listFilesAndDirectories()} />}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity onPress={() => Actions.viewbontravail({bontravailview:item})}>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>demandeur:{item.demandeur}</Text>
                    <Text style={styles.description}>defaillance:{item.defaillance}</Text>
                    <Text style={styles.description}>date de cloture:{item.datecloture}</Text>
                    <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{ uri: 'https://img.icons8.com/color/96/3498db/calendar.png' }} />
                      <Text style={styles.time}>{item.tempsprevu}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <Text> Marque:<Text style={styles.description}> {item.Marque}</Text></Text>
                  <Text> Type:<Text style={styles.description}> {item.Type}</Text></Text>
                </View>
                </View>
                  {item.status === "1" && <View style={{backgroundColor:"green"}} >
                    <Text> status:<Text style={styles.description}> Done</Text></Text>
                  </View>}
                  {item.status === "0" && <View style={{backgroundColor:"red"}} >
                    <Text> status:<Text style={styles.description}> not Done</Text></Text>
                  </View>}
                  
              </TouchableOpacity>
            )
          }} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: "white"
  },
  image: {
    width: 60,
    height: 60,
    alignItems: "center"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: 'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});
