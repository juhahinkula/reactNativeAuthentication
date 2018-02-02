import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: '', loading: false}
  }

  static navigationOptions = {
    title: 'Login',
  };

  login = () => {
    const { email, password } = this.state;
    this.setState({loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => { 
        this.setState({ error: '', loading: false }); 
        this.props.navigation.navigate('Home');
      })
      .catch(() => {
        // User does not exist. Create a new one
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => { this.setState({ error: '', loading: false }); })
          .catch(() => {
            this.setState({ error: 'Authentication failed', loading: false });
          });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width:300, height: 40, marginBottom: 10, borderColor: 'gray', borderWidth: 1}}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{width: 300, height: 40, marginBottom: 10, borderColor: 'gray', borderWidth: 1}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />    
        <Button title="Login" onPress={this.login} />
        <Text style={{color: 'red', marginTop: 20}}>{this.state.error}</Text>
        <Spinner visible={this.state.loading} textContent={"Logging in..."} textStyle={{color: '#FFF'}} />
      </View>
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

export default Login;