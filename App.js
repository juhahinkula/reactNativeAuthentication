import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Home from './Home';
import { StackNavigator } from 'react-navigation';

const AppNav = StackNavigator({
  Login: {screen: Login},
  Home: {screen: Home}
});

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "xxxxxxx",
      authDomain: "xxxxxx.firebaseapp.com",
      databaseURL: "xxxxxx.firebaseio.com",
      projectId: "xxxxxxx",
      storageBucket: "xxxxxx.appspot.com",
      messagingSenderId: "xxxxxxx"
    }); 
  }

  render() {
    return (
      <AppNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
