import React from 'react';
import { StyleSheet, View, Text, Button , Alert } from 'react-native';
import firebase from 'firebase';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  logout = () => {
    firebase.auth().signOut().then(() => {
      // Logout
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Welcome</Text>
          <Button onPress={this.logout} title="Logout" />
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