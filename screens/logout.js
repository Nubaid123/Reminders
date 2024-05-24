import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Sign-out error:', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Logging out...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#eb4034',
  },
});
