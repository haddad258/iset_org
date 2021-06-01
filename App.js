
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Routes from './Route'
export default class App extends Component {
  render() {
    return (
      <Routes />
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});


