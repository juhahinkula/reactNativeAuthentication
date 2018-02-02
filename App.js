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

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBeds8KY-Jw6gbcxgzhw9rRkmEc3Bm2ISc",
      authDomain: "reactauthentication-8ba67.firebaseapp.com",
      databaseURL: "https://reactauthentication-8ba67.firebaseio.com",
      projectId: "reactauthentication-8ba67",
      storageBucket: "reactauthentication-8ba67.appspot.com",
      messagingSenderId: "315993440137"
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
