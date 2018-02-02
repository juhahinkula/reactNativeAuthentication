import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Home from './Home';
import { StackNavigator } from 'react-navigation';

const LoginAppNav = StackNavigator({
  Login: {screen: Login},
});

const AppNav = StackNavigator({
  Home: {screen: Home}
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }

  // Change your Firebase settings here
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "xxxx",
      authDomain: "xxxxx.firebaseapp.com",
      databaseURL: "xxxxx.firebaseio.com",
      projectId: "xxxxx",
      storageBucket: "xxxxx.appspot.com",
      messagingSenderId: "xxxxx"
    }); 

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authenticated: true});
      } 
      else {
        this.setState({authenticated: false});
      }  
    });
  }


  render() {
    if (this.state.authenticated)
      return <AppNav />;
    else
      return <LoginAppNav />;
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
